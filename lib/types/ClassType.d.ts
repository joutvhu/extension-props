import { classForInstance, defineClass, isClass, isES6Class, preventOverrideClass, preventOverrideFunction } from '../utils/ClassAndFunction';
interface FunctionType {
    defineClass(name: string, superClass?: any): any;
    preventOverrideClass(classDefinition: any, except?: any[]): boolean;
    preventOverrideFunction(classDefinition: any, functions: string[]): boolean;
    subclassOf(superClass: any): boolean;
}
declare function valueOf(v: any): FunctionType | undefined;
export declare const type: {
    forInstance: typeof classForInstance;
    isClass: typeof isClass;
    defineClass: typeof defineClass;
    isES6Class: typeof isES6Class;
    preventOverrideClass: typeof preventOverrideClass;
    preventOverrideFunction: typeof preventOverrideFunction;
    valueOf: typeof valueOf;
};
export declare function extend(): void;
export {};
