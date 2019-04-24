export declare function functionForInstance(v: any): boolean;
export declare function classForInstance(v: any): boolean;
export declare function inheritsLoose(subclass: any, superclass: any): void;
export declare function defineFunctionClass(name: string, _superclass: any, _prototype?: Function): Function;
export declare function defineES5Class(name: string, superclass: any, prototype?: Function): Function;
export declare function defineES6Class(name: string, _superclass: any, _prototype?: Function): any;
export declare function defineClass(name: string, superClass?: Function, prototype?: Function): any;
export declare function dynamicDefineClass(name: string, prototype?: Function): any;
export declare const OverridingError: any;
export declare function isClass(v: any): boolean;
export declare function preventInheritingClass(obj: any, classDefinition: any, except?: any[]): boolean;
export declare function dynamicPreventInheritingClass(classDefinition: any, except?: any[]): boolean;
export declare function preventOverrideFunction(obj: any, classDefinition: any, functions: string[]): boolean;
export declare function dynamicPreventOverrideFunction(classDefinition: any, functions: string[]): boolean;
export declare function subclassOf(superclass: any): boolean;
export declare function isES6Class(c: any): boolean;
export declare function clone(): Function | undefined;
export declare function defineFunction(name: string, _prototype?: Function): Function | undefined;
export declare function dynamicDefineFunction(name: string): Function | undefined;
export declare function isNormalFunction(f: Function): boolean;
export declare function isAsyncFunction(f: Function): boolean;
export declare function isSyncFunction(f: Function): boolean;
export declare function isArrowFunction(f: Function): boolean;
export declare function isNonArrowFunction(f: Function): boolean;
export declare function isCallable(f: Function): boolean;
