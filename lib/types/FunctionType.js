"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassAndFunction_1 = require("../utils/ClassAndFunction");
function valueOf(v) {
    if (!ClassAndFunction_1.functionForInstance(v) || v.prototype === undefined)
        return undefined;
    return {
        clone: ClassAndFunction_1.clone.bind(v),
        defineFunction: ClassAndFunction_1.dynamicDefineFunction.bind(v)
    };
}
exports.type = {
    forInstance: ClassAndFunction_1.functionForInstance,
    defineFunction: ClassAndFunction_1.defineFunction,
    isCallable: ClassAndFunction_1.isCallable,
    isNormalFunction: ClassAndFunction_1.isNormalFunction,
    isAsyncFunction: ClassAndFunction_1.isAsyncFunction,
    isSyncFunction: ClassAndFunction_1.isSyncFunction,
    isArrowFunction: ClassAndFunction_1.isArrowFunction,
    isNonArrowFunction: ClassAndFunction_1.isNonArrowFunction,
    valueOf: valueOf
};
function extend() {
    Function.defineFunction = ClassAndFunction_1.defineFunction;
    Function.isCallable = ClassAndFunction_1.isCallable;
    Function.isNormalFunction = ClassAndFunction_1.isNormalFunction;
    Function.isAsyncFunction = ClassAndFunction_1.isAsyncFunction;
    Function.isSyncFunction = ClassAndFunction_1.isSyncFunction;
    Function.isArrowFunction = ClassAndFunction_1.isArrowFunction;
    Function.isNonArrowFunction = ClassAndFunction_1.isNonArrowFunction;
    Function.functionForInstance = ClassAndFunction_1.functionForInstance;
    Function.prototype.clone = ClassAndFunction_1.clone;
    Function.prototype.defineFunction = ClassAndFunction_1.dynamicDefineFunction;
}
exports.extend = extend;
