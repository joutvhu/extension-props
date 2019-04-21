export function functionForInstance(v: any): boolean {
    return v instanceof Function;
}

export function classForInstance(v: any): boolean {
    return v instanceof Function && v.prototype instanceof Object;
}

export function inheritsLoose(subClass, superClass): void {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}

export function defineFunctionClass(name: string, _superClass, _prototype?: Function): Function {
    let temp;
    let statements = 'temp = function ' + name + '() {\n';
    if (_superClass)
        statements += '    var _this = _superClass.apply(this, arguments) || this;\n';
    else
        statements += '    var _this = this;\n';
    if (_prototype instanceof Function) {
        if (_prototype.prototype !== undefined)
            statements += '    return _prototype.apply(_this, arguments) || _this;\n';
        else {
            statements += '    _prototype(arguments);\n' +
                '    return _this;\n';
        }
    } else statements += '    return _this;\n';
    statements += '}';
    eval(statements);
    return temp;
}

export function defineES5Class(name: string, superClass, prototype?: Function): Function {
    const subClass = defineFunctionClass(name, superClass, prototype);
    if (superClass && superClass.prototype instanceof Object)
        inheritsLoose(subClass, superClass);
    return subClass;
}

export function defineES6Class(name: string, _superClass, _prototype?: Function) {
    let temp;
    let statements = 'temp = class ' + name;
    if (_superClass && _superClass.prototype instanceof Object)
        statements += ' extends _superClass';
    statements += ' {\n' +
        '    constructor() {\n' +
        '        super(...arguments);\n';
    if (_prototype instanceof Function) {
        if (_prototype.prototype !== undefined)
            statements += '        _prototype.apply(this, arguments);\n';
        else statements += '        _prototype(arguments);\n';
    }
    statements += '    }\n' +
        '}';
    eval(statements);
    return temp;
}

export function defineClass(name: string, superClass?: Function, prototype?: Function) {
    let temp;
    if (typeof name !== 'string') return undefined;
    try {
        temp = defineES6Class(name, superClass, prototype);
    } catch (e) {
        temp = defineES5Class(name, superClass, prototype);
    }
    return temp;
}

export const OverridingError = defineClass('OverridingError', Error, function () {
    this.name = 'Overriding Error';
});

export function isClass(v: any): boolean {
    if (classForInstance(v)) {
        const props: string[] = Object.getOwnPropertyNames(v);
        if (props.includes('arguments') || props.includes('caller'))
            return false;
        return true;
    } else return false;
}

export function preventOverrideClass(obj: any, classDefinition: any, except?: any[]): boolean {
    if (classForInstance(classDefinition) && obj instanceof Object && obj['__proto__'] instanceof classDefinition) {
        let i;
        let error = true;
        if (except) {
            for (i of except) {
                if(!classForInstance(i))
                    return false;
                if (obj instanceof i) {
                    error = false;
                    break;
                }
            }
        }
        if (error) {
            throw new OverridingError('You can\'t override the [ClassName] class.'
                .replace('[ClassName]', classDefinition['name']));
        }
        return true;
    }
    return false;
}

export function dynamicPreventOverrideClass(classDefinition: any, except?: any[]): boolean {
    return preventOverrideClass(this, classDefinition, except);
}

export function preventOverrideFunction(obj: any, classDefinition: any, functions: string[]): boolean {
    if (classForInstance(obj) && obj instanceof classDefinition &&
        obj['__proto__'] !== undefined && obj['__proto__'] !== null) {
        let i;
        let nObj = this;

        while (nObj instanceof classDefinition) {
            for (i of functions) {
                if (typeof i === 'string' && nObj.hasOwnProperty(i))
                    throw new OverridingError('You can\'t override the [FunctionName] in any subclasses of the [ClassName] class.'
                        .replace('[FunctionName]', i)
                        .replace('[ClassName]', classDefinition['name']));
            }

            nObj = nObj['__proto__'];
        }
        return true;
    } else return false;
}

export function dynamicPreventOverrideFunction(classDefinition: any, functions: string[]): boolean {
    return preventOverrideFunction(this, classDefinition, functions);
}

export function subclassOf(superClass: any): boolean {
    return this instanceof Function && this.prototype instanceof superClass;
}

export function isES6Class(c: any): boolean {
    if (classForInstance(c)) {
        const cstr = c.toString();
        return /^\s*class\b/.test(cstr);
    } else return false;
}

export function clone(): Function | undefined {
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

export function defineFunction(name: string, _prototype?: Function): Function | undefined {
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

export function dynamicDefineFunction(name: string): Function | undefined {
    if (!(this instanceof Function)) return undefined;
    return defineFunction(name, this);
}

export function dynamicDefineClass(name: string, superClass?: Function) {
    return defineClass(name, superClass, this);
}

export function isNormalFunction(f: Function): boolean {
    return f instanceof Function && f.prototype !== undefined;
}

export function isAsyncFunction(f: Function): boolean {
    if (f instanceof Function && f.prototype === undefined) {
        try {
            return f[Symbol.toStringTag] === 'AsyncFunction';
        } catch (e) {
            return /^\s*async/.test(f.toString());
        }
    } else return false;
}

export function isSyncFunction(f: Function): boolean {
    if (f instanceof Function) {
        try {
            return f[Symbol.toStringTag] !== 'AsyncFunction';
        } catch (e) {
            return !/^\s*async/.test(f.toString());
        }
    } else return false;
}

export function isArrowFunction(f: Function): boolean {
    if (f instanceof Function && f.prototype === undefined) {
        const fstr = f.toString();
        if (/^\s*function/.test(fstr) || /^\s*async\s*function/.test(fstr))
            return false;
        return /^[a-zA-Z0-9_]+\s*=>/.test(fstr) || /^\s*async\s*[a-zA-Z0-9_]+\s*=>/.test(fstr) ||
            /^\([^]*\)\s*=>/.test(fstr) || /^\s*async\s*\([^]*\)\s*=>/.test(fstr);
    } else return false;
}

export function isNonArrowFunction(f: Function): boolean {
    if (f instanceof Function) {
        const fstr = f.toString();
        if (f.prototype !== undefined || /^\s*function/.test(fstr) || /^\s*async\s*function/.test(fstr))
            return true;
        return !/^[a-zA-Z0-9_]+\s*=>/.test(fstr) && !/^\s*async\s*[a-zA-Z0-9_]+\s*=>/.test(fstr) &&
            !/^\([^]*\)\s*=>/.test(fstr) && !/^\s*async\s*\([^]*\)\s*=>/.test(fstr);
    } else return false;
}
