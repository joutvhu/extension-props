import {
    classForInstance,
    defineClass,
    dynamicPreventOverrideClass,
    dynamicPreventOverrideFunction,
    isClass,
    isES6Class,
    preventOverrideClass,
    preventOverrideFunction,
    subclassOf
} from '../utils/ClassAndFunction';

interface FunctionType {
    defineClass(name: string, superClass?: any);

    preventOverrideClass(classDefinition: any, except?: any[]): boolean;

    preventOverrideFunction(classDefinition: any, functions: string[]): boolean;

    subclassOf(superClass: any): boolean;
}

function valueOf(v: any): FunctionType | undefined {
    if (!classForInstance(v)) return undefined;
    return {
        defineClass(name: string, superClass) {
            return defineClass(name, superClass, v);
        },
        preventOverrideClass: dynamicPreventOverrideClass.bind(v),
        preventOverrideFunction: dynamicPreventOverrideFunction.bind(v),
        subclassOf: subclassOf.bind(v)
    };
}

export const type = {
    forInstance: classForInstance,
    isClass,
    defineClass,
    isES6Class,
    preventOverrideClass,
    preventOverrideFunction,
    valueOf
};

export function extend() {
    Function.defineClass = defineClass;
    Function.isClass = isClass;
    Function.subclassOf = subclassOf;
    Function.isES6Class = isES6Class;

    Object.preventOverrideClass = preventOverrideClass;
    Object.preventOverrideFunction = preventOverrideFunction;

    Object.prototype.preventOverrideClass = dynamicPreventOverrideClass;
    Object.prototype.preventOverrideFunction = dynamicPreventOverrideFunction;
}
