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
    valueOf: valueOf
};
function extend() {
    Function.defineFunction = defineFunction;
    Function.prototype.clone = clone;
    Function.prototype.defineFunction = dynamicDefineFunction;
    Function.prototype.defineClass = defineClass;
}
exports.extend = extend;
