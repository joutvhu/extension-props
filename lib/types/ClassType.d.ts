declare function forInstance(v: any): boolean;
declare function defineClass(name: string, superClass?: Function, prototype?: Function): any;
declare function isClass(v: any): boolean;
declare function preventOverrideClass(obj: any, classDefinition: any, except?: any[]): boolean;
declare function preventOverrideFunction(obj: any, classDefinition: any, functions: string[]): boolean;
interface FunctionType {
    defineClass(name: string, superClass?: any): any;
    preventOverrideClass(classDefinition: any, except?: any[]): boolean;
    preventOverrideFunction(classDefinition: any, functions: string[]): boolean;
}
declare function valueOf(v: any): FunctionType | undefined;
export declare const type: {
    forInstance: typeof forInstance;
    isClass: typeof isClass;
    defineClass: typeof defineClass;
    preventOverrideClass: typeof preventOverrideClass;
    preventOverrideFunction: typeof preventOverrideFunction;
    valueOf: typeof valueOf;
};
export declare function extend(): void;
export {};
