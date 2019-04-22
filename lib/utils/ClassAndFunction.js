"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function functionForInstance(v) {
    return v instanceof Function;
}
exports.functionForInstance = functionForInstance;
function classForInstance(v) {
    return v instanceof Function && v.prototype instanceof Object;
}
exports.classForInstance = classForInstance;
function inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
exports.inheritsLoose = inheritsLoose;
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
exports.defineFunctionClass = defineFunctionClass;
function defineES5Class(name, superClass, prototype) {
    var subClass = defineFunctionClass(name, superClass, prototype);
    if (superClass && superClass.prototype instanceof Object)
        inheritsLoose(subClass, superClass);
    return subClass;
}
exports.defineES5Class = defineES5Class;
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
exports.defineES6Class = defineES6Class;
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
exports.defineClass = defineClass;
exports.OverridingError = defineClass('OverridingError', Error, function () {
    this.name = 'Overriding Error';
});
function isClass(v) {
    if (classForInstance(v)) {
        var props = Object.getOwnPropertyNames(v);
        if (props.includes('arguments') || props.includes('caller'))
            return false;
        return true;
    }
    else
        return false;
}
exports.isClass = isClass;
function preventOverrideClass(obj, classDefinition, except) {
    if (classForInstance(classDefinition) && obj instanceof Object && obj['__proto__'] instanceof classDefinition) {
        var i = void 0;
        var error = true;
        if (except instanceof Array && except.length > 0) {
            for (var _i = 0, except_1 = except; _i < except_1.length; _i++) {
                i = except_1[_i];
                if (!classForInstance(i))
                    return false;
                if (obj instanceof i) {
                    error = false;
                    break;
                }
            }
        }
        if (error) {
            throw new exports.OverridingError('You can\'t override the [ClassName] class.'
                .replace('[ClassName]', classDefinition['name']));
        }
        return true;
    }
    return false;
}
exports.preventOverrideClass = preventOverrideClass;
function dynamicPreventOverrideClass(classDefinition, except) {
    return preventOverrideClass(this, classDefinition, except);
}
exports.dynamicPreventOverrideClass = dynamicPreventOverrideClass;
function preventOverrideFunction(obj, classDefinition, functions) {
    if (classForInstance(classDefinition) && obj instanceof Object && obj['__proto__'] instanceof classDefinition) {
        if (functions instanceof Array && functions.length > 0) {
            var i = void 0;
            var nObj = obj;
            while (nObj instanceof classDefinition) {
                for (var _i = 0, functions_1 = functions; _i < functions_1.length; _i++) {
                    i = functions_1[_i];
                    if (nObj.hasOwnProperty(i)) {
                        throw new exports.OverridingError('You can\'t override the [FunctionName] in any subclasses of the [ClassName] class.'
                            .replace('[FunctionName]', i)
                            .replace('[ClassName]', classDefinition['name']));
                    }
                }
                nObj = nObj['__proto__'];
            }
        }
        return true;
    }
    else
        return false;
}
exports.preventOverrideFunction = preventOverrideFunction;
function dynamicPreventOverrideFunction(classDefinition, functions) {
    return preventOverrideFunction(this, classDefinition, functions);
}
exports.dynamicPreventOverrideFunction = dynamicPreventOverrideFunction;
function subclassOf(superClass) {
    return this instanceof Function && this.prototype instanceof superClass;
}
exports.subclassOf = subclassOf;
function isES6Class(c) {
    if (classForInstance(c)) {
        var cstr = c.toString();
        return /^\s*class\b/.test(cstr);
    }
    else
        return false;
}
exports.isES6Class = isES6Class;
function clone() {
    if (!(this instanceof Function))
        return undefined;
    var that = this;
    var temp = function temporary() {
        return that.apply(this, arguments);
    };
    var key;
    for (key in this) {
        if (this.hasOwnProperty(key))
            temp[key] = this[key];
    }
    return temp;
}
exports.clone = clone;
function defineFunction(name, _prototype) {
    if (typeof name !== 'string')
        return undefined;
    var temp;
    var statements = 'temp = function ' + name + '() {\n';
    if (_prototype instanceof Function) {
        if (_prototype.prototype !== undefined)
            statements += '    return _prototype.apply(this, arguments)\n';
        else
            statements += '    return _prototype(arguments)\n';
    }
    statements += '}';
    eval(statements);
    return temp;
}
exports.defineFunction = defineFunction;
function dynamicDefineFunction(name) {
    if (!(this instanceof Function))
        return undefined;
    return defineFunction(name, this);
}
exports.dynamicDefineFunction = dynamicDefineFunction;
function dynamicDefineClass(name, superClass) {
    return defineClass(name, superClass, this);
}
exports.dynamicDefineClass = dynamicDefineClass;
function isNormalFunction(f) {
    return f instanceof Function && !isES6Class(f) && f.prototype !== undefined;
}
exports.isNormalFunction = isNormalFunction;
function isAsyncFunction(f) {
    if (f instanceof Function && f.prototype === undefined) {
        try {
            return f[Symbol.toStringTag] === 'AsyncFunction';
        }
        catch (e) {
            return /^\s*async/.test(f.toString());
        }
    }
    else
        return false;
}
exports.isAsyncFunction = isAsyncFunction;
function isSyncFunction(f) {
    if (f instanceof Function && !isES6Class(f)) {
        try {
            return f[Symbol.toStringTag] !== 'AsyncFunction';
        }
        catch (e) {
            return !/^\s*async/.test(f.toString());
        }
    }
    else
        return false;
}
exports.isSyncFunction = isSyncFunction;
function isArrowFunction(f) {
    if (f instanceof Function && f.prototype === undefined) {
        var fstr = f.toString();
        if (/^\s*function/.test(fstr) || /^\s*async\s*function/.test(fstr))
            return false;
        return /^[a-zA-Z0-9_]+\s*=>/.test(fstr) || /^\s*async\s*[a-zA-Z0-9_]+\s*=>/.test(fstr) ||
            /^\([^]*\)\s*=>/.test(fstr) || /^\s*async\s*\([^]*\)\s*=>/.test(fstr);
    }
    else
        return false;
}
exports.isArrowFunction = isArrowFunction;
function isNonArrowFunction(f) {
    if (f instanceof Function && !isES6Class(f)) {
        var fstr = f.toString();
        if (f.prototype !== undefined || /^\s*function/.test(fstr) || /^\s*async\s*function/.test(fstr))
            return true;
        return !/^[a-zA-Z0-9_]+\s*=>/.test(fstr) && !/^\s*async\s*[a-zA-Z0-9_]+\s*=>/.test(fstr) &&
            !/^\([^]*\)\s*=>/.test(fstr) && !/^\s*async\s*\([^]*\)\s*=>/.test(fstr);
    }
    else
        return false;
}
exports.isNonArrowFunction = isNonArrowFunction;
function isCallable(f) {
    if (f instanceof Function) {
        if (!f.prototype)
            return true;
        return !isES6Class(f);
    }
    return false;
}
exports.isCallable = isCallable;
