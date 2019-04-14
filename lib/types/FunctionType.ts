import {type as typeClass} from './ClassType';

function forInstance(v: any): boolean {
    return v instanceof Function;
}

function clone(): Function | undefined {
    if (!(this instanceof Function)) return undefined;
    const that = this;
    const temp = function temporary() {
        return that.apply(this, arguments);
    };
    let key;
    for (key in this) {
        if (this.hasOwnProperty(key)) temp[key] = this[key];
    }
    return temp;
}

function defineFunction(name: string, _prototype?: Function): Function | undefined {
    if (typeof name !== 'string') return undefined;
    let temp;
    let statements = 'temp = function ' + name + '() {\n';
    if (_prototype instanceof Function) {
        if (_prototype.prototype !== undefined)
            statements += '    return _prototype.apply(this, arguments)\n';
        else statements += '    return _prototype(arguments)\n';
    }
    statements += '}';
    eval(statements);
    return temp;
}

function dynamicDefineFunction(name: string): Function | undefined {
    if (!(this instanceof Function)) return undefined;
    return defineFunction(name, this);
}

function defineClass(name: string, superClass?: Function) {
    return typeClass.defineClass(name, superClass, this);
}

function isNormalFunction(f: Function): boolean {
    return f instanceof Function && f.prototype !== undefined;
}

function isAsyncFunction(f: Function): boolean {
    if (f instanceof Function && f.prototype === undefined) {
        try {
            return f[Symbol.toStringTag] === 'AsyncFunction';
        } catch (e) {
            return /^\s*async/.test(f.toString());
        }
    } else return false;
}

function isSyncFunction(f: Function): boolean {
    if (f instanceof Function) {
        try {
            return f[Symbol.toStringTag] !== 'AsyncFunction';
        } catch (e) {
            return !/^\s*async/.test(f.toString());
        }
    } else return false;
}

function isArrowFunction(f: Function): boolean {
    if (f instanceof Function && f.prototype === undefined) {
        const fstr = f.toString();
        if (/^\s*function/.test(fstr) || /^\s*async\s*function/.test(fstr))
            return false;
        return /^[a-zA-Z0-9_]+\s*=>/.test(fstr) || /^\s*async\s*[a-zA-Z0-9_]+\s*=>/.test(fstr) ||
            /^\([^]*\)\s*=>/.test(fstr) || /^\s*async\s*\([^]*\)\s*=>/.test(fstr);
    } else return false;
}

function isNonArrowFunction(f: Function): boolean {
    if (f instanceof Function) {
        const fstr = f.toString();
        if (f.prototype !== undefined || /^\s*function/.test(fstr) || /^\s*async\s*function/.test(fstr))
            return true;
        return !/^[a-zA-Z0-9_]+\s*=>/.test(fstr) && !/^\s*async\s*[a-zA-Z0-9_]+\s*=>/.test(fstr) &&
            !/^\([^]*\)\s*=>/.test(fstr) && !/^\s*async\s*\([^]*\)\s*=>/.test(fstr);
    } else return false;
}

interface FunctionType {
    clone(): Function;

    defineClass(name: string, superClass?: any);

    defineFunction(name: string): Function | undefined;
}

function valueOf(v: any): FunctionType | undefined {
    if (!forInstance(v) || v.prototype === undefined) return undefined;
    return {
        clone: clone.bind(v),
        defineFunction: defineFunction.bind(v),
        defineClass: defineClass.bind(v)
    };
}

export const type = {
    forInstance,
    defineFunction,
    isNormalFunction,
    isAsyncFunction,
    isSyncFunction,
    isArrowFunction,
    isNonArrowFunction,
    valueOf
};

export function extend() {
    Function.defineFunction = defineFunction;
    Function.isNormalFunction = isNormalFunction;
    Function.isAsyncFunction = isAsyncFunction;
    Function.isSyncFunction = isSyncFunction;
    Function.isArrowFunction = isArrowFunction;
    Function.isNonArrowFunction = isNonArrowFunction;

    Function.prototype.clone = clone;
    Function.prototype.defineFunction = dynamicDefineFunction;
    Function.prototype.defineClass = defineClass;
}
