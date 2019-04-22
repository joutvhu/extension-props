import {
    classForInstance,
    defineClass,
    dynamicPreventInheritingClass,
    dynamicPreventOverrideFunction,
    isClass,
    isES6Class,
    preventInheritingClass,
    preventOverrideFunction,
    subclassOf
} from '../utils/ClassAndFunction';

interface FunctionType {
    defineClass(name: string, superclass?: any);

    preventInheritingClass(classDefinition: any, except?: any[]): boolean;

    preventOverrideFunction(classDefinition: any, functions: string[]): boolean;

    subclassOf(superclass: any): boolean;
}

function valueOf(v: any): FunctionType | undefined {
    if (!classForInstance(v)) return undefined;
    return {
        defineClass(name: string, superClass) {
            return defineClass(name, superClass, v);
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

    Object.preventInheritingClass = preventInheritingClass;
    Object.preventOverrideFunction = preventOverrideFunction;

    Object.prototype.preventInheritingClass = dynamicPreventInheritingClass;
    Object.prototype.preventOverrideFunction = dynamicPreventOverrideFunction;
}
