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
    valueOf
};

export function extend() {
    Function.defineFunction = defineFunction;

    Function.prototype.clone = clone;
    Function.prototype.defineFunction = dynamicDefineFunction;
    Function.prototype.defineClass = defineClass;
}
