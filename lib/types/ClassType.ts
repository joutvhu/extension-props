import {
    classForInstance,
    defineClass,
    dynamicDefineClass,
    dynamicPreventInheritingClass,
    dynamicPreventOverrideFunction,
    isClass,
    isES6Class,
    preventInheritingClass,
    preventOverrideFunction,
    subclassOf
} from '../utils/ClassAndFunction';

interface FunctionType {
    defineClass(name: string, prototype?: Function);

    preventInheritingClass(classDefinition: any, except?: any[]): boolean;

    preventOverrideFunction(classDefinition: any, functions: string[]): boolean;

    subclassOf(superclass: any): boolean;
}

function valueOf(v: any): FunctionType | undefined {
    if (!classForInstance(v) && !(v instanceof Object)) return undefined;
    return {
        defineClass(name: string, prototype?: Function) {
            return defineClass(name, v, prototype);
        },
        preventInheritingClass: dynamicPreventInheritingClass.bind(v),
        preventOverrideFunction: dynamicPreventOverrideFunction.bind(v),
        subclassOf: subclassOf.bind(v)
    };
}

export const type = {
    forInstance: classForInstance,
    isClass,
    defineClass,
    isES6Class,
    preventInheritingClass,
    preventOverrideFunction,
    valueOf
};

export function extend() {
    Function.defineClass = defineClass;
    Function.isClass = isClass;
    Function.subclassOf = subclassOf;
    Function.isES6Class = isES6Class;
    Function.classForInstance = classForInstance;

    Object.preventInheritingClass = preventInheritingClass;
    Object.preventOverrideFunction = preventOverrideFunction;

    Function.prototype.defineClass = dynamicDefineClass;

    Object.prototype.preventInheritingClass = dynamicPreventInheritingClass;
    Object.prototype.preventOverrideFunction = dynamicPreventOverrideFunction;
}
