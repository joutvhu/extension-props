"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassAndFunction_1 = require("../utils/ClassAndFunction");
function valueOf(v) {
    if (!ClassAndFunction_1.classForInstance(v))
        return undefined;
    return {
        defineClass: function (name, superClass) {
            return ClassAndFunction_1.defineClass(name, superClass, v);
        },
        preventOverrideClass: ClassAndFunction_1.dynamicPreventOverrideClass.bind(v),
        preventOverrideFunction: ClassAndFunction_1.dynamicPreventOverrideFunction.bind(v),
        subclassOf: ClassAndFunction_1.subclassOf.bind(v)
    };
}
exports.type = {
    forInstance: ClassAndFunction_1.classForInstance,
    isClass: ClassAndFunction_1.isClass,
    defineClass: ClassAndFunction_1.defineClass,
    isES6Class: ClassAndFunction_1.isES6Class,
    preventOverrideClass: ClassAndFunction_1.preventOverrideClass,
    preventOverrideFunction: ClassAndFunction_1.preventOverrideFunction,
    valueOf: valueOf
};
function extend() {
    Function.defineClass = ClassAndFunction_1.defineClass;
    Function.isClass = ClassAndFunction_1.isClass;
    Function.subclassOf = ClassAndFunction_1.subclassOf;
    Function.isES6Class = ClassAndFunction_1.isES6Class;
    Object.preventOverrideClass = ClassAndFunction_1.preventOverrideClass;
    Object.preventOverrideFunction = ClassAndFunction_1.preventOverrideFunction;
    Object.prototype.preventOverrideClass = ClassAndFunction_1.dynamicPreventOverrideClass;
    Object.prototype.preventOverrideFunction = ClassAndFunction_1.dynamicPreventOverrideFunction;
}
exports.extend = extend;
