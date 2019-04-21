"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassAndFunction_1 = require("../utils/ClassAndFunction");
function valueOf(v) {
    if (!ClassAndFunction_1.functionForInstance(v) || v.prototype === undefined)
        return undefined;
    return {
        clone: ClassAndFunction_1.clone.bind(v),
        defineFunction: ClassAndFunction_1.defineFunction.bind(v),
        defineClass: ClassAndFunction_1.dynamicDefineClass.bind(v)
    };
}
exports.type = {
    forInstance: ClassAndFunction_1.functionForInstance,
    defineFunction: ClassAndFunction_1.defineFunction,
    isNormalFunction: ClassAndFunction_1.isNormalFunction,
    isAsyncFunction: ClassAndFunction_1.isAsyncFunction,
    isSyncFunction: ClassAndFunction_1.isSyncFunction,
    isArrowFunction: ClassAndFunction_1.isArrowFunction,
    isNonArrowFunction: ClassAndFunction_1.isNonArrowFunction,
    valueOf: valueOf
};
function extend() {
    Function.defineFunction = ClassAndFunction_1.defineFunction;
    Function.isNormalFunction = ClassAndFunction_1.isNormalFunction;
    Function.isAsyncFunction = ClassAndFunction_1.isAsyncFunction;
    Function.isSyncFunction = ClassAndFunction_1.isSyncFunction;
    Function.isArrowFunction = ClassAndFunction_1.isArrowFunction;
    Function.isNonArrowFunction = ClassAndFunction_1.isNonArrowFunction;
    Function.prototype.clone = ClassAndFunction_1.clone;
    Function.prototype.defineFunction = ClassAndFunction_1.dynamicDefineFunction;
    Function.prototype.defineClass = ClassAndFunction_1.dynamicDefineClass;
}
exports.extend = extend;
