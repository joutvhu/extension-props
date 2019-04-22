import { classForInstance, defineClass, isClass, isES6Class, preventInheritingClass, preventOverrideFunction } from '../utils/ClassAndFunction';
interface FunctionType {
    defineClass(name: string, superclass?: any): any;
    preventInheritingClass(classDefinition: any, except?: any[]): boolean;
    preventOverrideFunction(classDefinition: any, functions: string[]): boolean;
    subclassOf(superclass: any): boolean;
}
declare function valueOf(v: any): FunctionType | undefined;
export declare const type: {
    forInstance: typeof classForInstance;
    isClass: typeof isClass;
    defineClass: typeof defineClass;
    isES6Class: typeof isES6Class;
    preventInheritingClass: typeof preventInheritingClass;
    preventOverrideFunction: typeof preventOverrideFunction;
    valueOf: typeof valueOf;
};
export declare function extend(): void;
export {};
