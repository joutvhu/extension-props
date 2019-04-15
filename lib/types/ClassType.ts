import OverridingError from '../errors/OverridingError';

function forInstance(v: any): boolean {
    return v instanceof Function && v.prototype instanceof Object;
}

function inheritsLoose(subClass, superClass): void {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}

function defineFunctionClass(name: string, _superClass, _prototype?: Function): Function {
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

function defineES5Class(name: string, superClass, prototype?: Function): Function {
    const subClass = defineFunctionClass(name, superClass, prototype);
    if (superClass && superClass.prototype instanceof Object)
        inheritsLoose(subClass, superClass);
    return subClass;
}

function defineES6Class(name: string, _superClass, _prototype?: Function) {
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

function defineClass(name: string, superClass?: Function, prototype?: Function) {
    let temp;
    if (typeof name !== 'string') return undefined;
    try {
        temp = defineES6Class(name, superClass, prototype);
    } catch (e) {
        temp = defineES5Class(name, superClass, prototype);
    }
    return temp;
}

function isClass(v: any): boolean {
    if (forInstance(v)) {
        const props: string[] = Object.getOwnPropertyNames(v);
        if (props.includes('arguments') || props.includes('caller'))
            return false;
        return true;
    } else return false;
}

function preventOverrideClass(obj: any, classDefinition: any, except?: any[]): boolean {
    if (forInstance(obj) && obj['__proto__'] instanceof classDefinition) {
        let error = true;
        if (except) {
            for (let i of except) {
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

function dynamicPreventOverrideClass(classDefinition: any, except?: any[]): boolean {
    return preventOverrideClass(this, classDefinition, except);
}

function preventOverrideFunction(obj: any, classDefinition: any, functions: string[]): boolean {
    if (forInstance(obj) && obj instanceof classDefinition &&
        obj['__proto__'] !== undefined && obj['__proto__'] !== null) {
        let nObj = this;

        while (nObj instanceof classDefinition) {
            for (let i of functions) {
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

function dynamicPreventOverrideFunction(classDefinition: any, functions: string[]): boolean {
    return preventOverrideFunction(this, classDefinition, functions);
}

function subclassOf(superClass: any): boolean {
    return this instanceof Function && this.prototype instanceof superClass;
}

interface FunctionType {
    defineClass(name: string, superClass?: any);

    preventOverrideClass(classDefinition: any, except?: any[]): boolean;

    preventOverrideFunction(classDefinition: any, functions: string[]): boolean;

    subclassOf(superClass: any): boolean;
}

function valueOf(v: any): FunctionType | undefined {
    if (!forInstance(v)) return undefined;
    return {
        defineClass(name: string, superClass) {
            return defineClass(name, superClass, v);
        },
        preventOverrideClass: dynamicPreventOverrideClass.bind(v),
        preventOverrideFunction: dynamicPreventOverrideFunction.bind(v),
        subclassOf: subclassOf.bind(v)
    };
}

export const type = {
    forInstance,
    isClass,
    defineClass,
    preventOverrideClass,
    preventOverrideFunction,
    valueOf
};

export function extend() {
    Function.defineClass = defineClass;
    Function.isClass = isClass;
    Function.subclassOf = subclassOf;

    Object.preventOverrideClass = preventOverrideClass;
    Object.preventOverrideFunction = preventOverrideFunction;

    Object.prototype.preventOverrideClass = dynamicPreventOverrideClass;
    Object.prototype.preventOverrideFunction = dynamicPreventOverrideFunction;
}
