"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassType_1 = require("./ClassType");
function forInstance(v) {
    return v instanceof Function;
}
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
function dynamicDefineFunction(name) {
    if (!(this instanceof Function))
        return undefined;
    return defineFunction(name, this);
}
function defineClass(name, superClass) {
    return ClassType_1.type.defineClass(name, superClass, this);
}
function isNormalFunction(f) {
    return f instanceof Function && f.prototype !== undefined;
}
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
function isSyncFunction(f) {
    if (f instanceof Function) {
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
function isNonArrowFunction(f) {
    if (f instanceof Function) {
        var fstr = f.toString();
        if (f.prototype !== undefined || /^\s*function/.test(fstr) || /^\s*async\s*function/.test(fstr))
            return true;
        return !/^[a-zA-Z0-9_]+\s*=>/.test(fstr) && !/^\s*async\s*[a-zA-Z0-9_]+\s*=>/.test(fstr) &&
            !/^\([^]*\)\s*=>/.test(fstr) && !/^\s*async\s*\([^]*\)\s*=>/.test(fstr);
    }
    else
        return false;
}
function valueOf(v) {
    if (!forInstance(v) || v.prototype === undefined)
        return undefined;
    return {
        clone: clone.bind(v),
        defineFunction: defineFunction.bind(v),
        defineClass: defineClass.bind(v)
    };
}
exports.type = {
    forInstance: forInstance,
    defineFunction: defineFunction,
    isNormalFunction: isNormalFunction,
    isAsyncFunction: isAsyncFunction,
    isSyncFunction: isSyncFunction,
    isArrowFunction: isArrowFunction,
    isNonArrowFunction: isNonArrowFunction,
    valueOf: valueOf
};
function extend() {
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
exports.extend = extend;
