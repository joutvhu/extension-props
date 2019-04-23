"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassAndFunction_1 = require("../utils/ClassAndFunction");
function valueOf(v) {
    if (!ClassAndFunction_1.classForInstance(v))
        return undefined;
    return {
        defineClass: function (name, prototype) {
            return ClassAndFunction_1.defineClass(name, v, prototype);
        },
        preventInheritingClass: ClassAndFunction_1.dynamicPreventInheritingClass.bind(v),
        preventOverrideFunction: ClassAndFunction_1.dynamicPreventOverrideFunction.bind(v),
        subclassOf: ClassAndFunction_1.subclassOf.bind(v)
    };
}
exports.type = {
    forInstance: ClassAndFunction_1.classForInstance,
    isClass: ClassAndFunction_1.isClass,
    defineClass: ClassAndFunction_1.defineClass,
    isES6Class: ClassAndFunction_1.isES6Class,
    preventInheritingClass: ClassAndFunction_1.preventInheritingClass,
    preventOverrideFunction: ClassAndFunction_1.preventOverrideFunction,
    valueOf: valueOf
};
function extend() {
    Function.defineClass = ClassAndFunction_1.defineClass;
    Function.isClass = ClassAndFunction_1.isClass;
    Function.subclassOf = ClassAndFunction_1.subclassOf;
    Function.isES6Class = ClassAndFunction_1.isES6Class;
    Object.preventInheritingClass = ClassAndFunction_1.preventInheritingClass;
    Object.preventOverrideFunction = ClassAndFunction_1.preventOverrideFunction;
    Function.prototype.defineClass = ClassAndFunction_1.dynamicDefineClass;
    Object.prototype.preventInheritingClass = ClassAndFunction_1.dynamicPreventInheritingClass;
    Object.prototype.preventOverrideFunction = ClassAndFunction_1.dynamicPreventOverrideFunction;
}
exports.extend = extend;
