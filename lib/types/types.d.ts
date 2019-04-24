interface String {
    equals(v: any): boolean;
    equalsIgnoreCase(v: any): boolean;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    replaceAll(search, replacement): string;
    replacePlaceholders(map: any): string;
}

interface StringConstructor {
    empty: string;
    space: string;
    isBlank(v: any): boolean;
    isNotBlank(v: any): boolean;
    forInstance(v: any): boolean;
    replaceAll(str, search, replacement): string | undefined;
    replacePlaceholders(str: string, map: any): string | undefined;
}

interface Array<T> {
    includes(searchElement: T, fromIndex?: number): boolean;
    equals(v: T[]): boolean;
    virtualGet(i: number): T;
    insert(i: number, ...elements: T[]): T[];
    lastIndexOf(o: T): number;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
}

interface ArrayConstructor {
    isBlank(v: any): boolean;
    isNotBlank(v: any): boolean;
    forInstance(v: any): boolean;
}

interface RegExpConstructor {
    escape(str: string): string;
    matchWords(str: string): string;
    forInstance(v: any): boolean;
}

interface Function {
    clone(): Function | undefined;
    defineClass(name: string, prototype?: Function);
    defineFunction(name: string): Function | undefined;
    subclassOf(superclass: any): boolean;
}

interface FunctionConstructor {
    isClass(v: any): boolean;
    defineClass(name: string, superclass?: any, prototype?: Function);
    isES6Class(v: any): boolean;
    defineFunction(name: string, _prototype?: Function): Function | undefined;
    getAllPropertyNames(obj: any): string[];
    isCallable(f: Function): boolean;
    isNormalFunction(f: Function): boolean;
    isAsyncFunction(f: Function): boolean;
    isSyncFunction(f: Function): boolean;
    isArrowFunction(f: Function): boolean;
    isNonArrowFunction(f: Function): boolean;
}

interface Object {
    preventInheritingClass(classDefinition: any, except?: any[]): boolean;
    preventOverrideFunction(classDefinition: any, functions: string[]): boolean;
}

interface ObjectConstructor {
    isBlank(v: any): boolean;
    isNotBlank(v: any): boolean;
    getAllPropertyNames(obj: any): string[];
    getAllPropertyDescriptor(obj: any, p: string): any;
    getAllPropertyDescriptors(obj: any): any;
    preventInheritingClass(obj: any, classDefinition: any, except?: any[]): boolean;
    preventOverrideFunction(obj: any, classDefinition: any, functions: string[]): boolean;
}
