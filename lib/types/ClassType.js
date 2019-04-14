"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var OverridingError_1 = __importDefault(require("../errors/OverridingError"));
function forInstance(v) {
    return v instanceof Function && v.prototype instanceof Object;
}
function inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
function defineFunctionClass(name, _superClass, _prototype) {
    var temp;
    var statements = 'temp = function ' + name + '() {\n';
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
    }
    else
        statements += '    return _this;\n';
    statements += '}';
    eval(statements);
    return temp;
}
function defineES5Class(name, superClass, prototype) {
    var subClass = defineFunctionClass(name, superClass, prototype);
    if (superClass && superClass.prototype instanceof Object)
        inheritsLoose(subClass, superClass);
    return subClass;
}
function defineES6Class(name, _superClass, _prototype) {
    var temp;
    var statements = 'temp = class ' + name;
    if (_superClass && _superClass.prototype instanceof Object)
        statements += ' extends _superClass';
    statements += ' {\n' +
        '    constructor() {\n' +
        '        super(...arguments);\n';
    if (_prototype instanceof Function) {
        if (_prototype.prototype !== undefined)
            statements += '        _prototype.apply(this, arguments);\n';
        else
            statements += '        _prototype(arguments);\n';
    }
    statements += '    }\n' +
        '}';
    eval(statements);
    return temp;
}
function defineClass(name, superClass, prototype) {
    var temp;
    if (typeof name !== 'string')
        return undefined;
    try {
        temp = defineES6Class(name, superClass, prototype);
    }
    catch (e) {
        temp = defineES5Class(name, superClass, prototype);
    }
    return temp;
}
function isClass(v) {
    if (forInstance(v)) {
        var props = Object.getOwnPropertyNames(v);
        if (props.includes('arguments') || props.includes('caller'))
            return false;
        return true;
    }
    else
        return false;
}
function preventOverrideClass(obj, classDefinition, except) {
    if (forInstance(obj) && obj['__proto__'] instanceof classDefinition) {
        var error = true;
        if (except) {
            for (var _i = 0, except_1 = except; _i < except_1.length; _i++) {
                var i = except_1[_i];
                if (obj instanceof i) {
                    error = false;
                    break;
                }
            }
        }
        if (error) {
            throw new OverridingError_1.default('You can\'t override the [ClassName] class.'
                .replace('[ClassName]', classDefinition['name']));
        }
        return true;
    }
    return false;
}
function dynamicPreventOverrideClass(classDefinition, except) {
    return preventOverrideClass(this, classDefinition, except);
}
function preventOverrideFunction(obj, classDefinition, functions) {
    if (forInstance(obj) && obj instanceof classDefinition &&
        obj['__proto__'] !== undefined && obj['__proto__'] !== null) {
        var nObj = this;
        while (nObj instanceof classDefinition) {
            for (var _i = 0, functions_1 = functions; _i < functions_1.length; _i++) {
                var i = functions_1[_i];
                if (typeof i === 'string' && nObj.hasOwnProperty(i))
                    throw new OverridingError_1.default('You can\'t override the [FunctionName] in any subclasses of the [ClassName] class.'
                        .replace('[FunctionName]', i)
                        .replace('[ClassName]', classDefinition['name']));
            }
            nObj = nObj['__proto__'];
        }
        return true;
    }
    else
        return false;
}
function dynamicPreventOverrideFunction(classDefinition, functions) {
    return preventOverrideFunction(this, classDefinition, functions);
}
function subclassOf(superClass) {
    return this instanceof Function && this.prototype instanceof superClass;
}
function valueOf(v) {
    if (!forInstance(v))
        return undefined;
    return {
        defineClass: function (name, superClass) {
            return defineClass(name, superClass, v);
        },
        preventOverrideClass: dynamicPreventOverrideClass.bind(v),
        preventOverrideFunction: dynamicPreventOverrideFunction.bind(v),
        subclassOf: subclassOf.bind(v)
    };
}
exports.type = {
    forInstance: forInstance,
    isClass: isClass,
    defineClass: defineClass,
    preventOverrideClass: preventOverrideClass,
    preventOverrideFunction: preventOverrideFunction,
    valueOf: valueOf
};
function extend() {
    Function.defineClass = defineClass;
    Function.isClass = isClass;
    Function.subclassOf = subclassOf;
    Object.preventOverrideClass = preventOverrideClass;
    Object.preventOverrideFunction = preventOverrideFunction;
    Object.prototype.preventOverrideClass = dynamicPreventOverrideClass;
    Object.prototype.preventOverrideFunction = dynamicPreventOverrideFunction;
}
exports.extend = extend;
