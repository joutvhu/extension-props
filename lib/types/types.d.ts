interface String {
    equals(v: any): boolean;
    equalsIgnoreCase(v: any): boolean;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
}

interface StringConstructor {
    empty: string;
    space: string;
    isBlank(v: any): boolean;
    isNotBlank(v: any): boolean;
    forInstance(v: any): boolean;
}

interface Array<T> {
    equals(v: T[]): boolean;
    virtualGet(i: number): T;
    insert(index: number, ...element: T[]): T[];
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
    defineClass(name: string, superClass?: any);
    defineFunction(name: string): Function | undefined;
}

interface FunctionConstructor {
    isClass(v: any): boolean;
    defineClass(name: string, superClass?: any, prototype?: Function);
    defineFunction(name: string, _prototype?: Function): Function | undefined;
    getAllPropertyNames(obj: any): string[];
    isNormalFunction(f: Function): boolean;
    isAsyncFunction(f: Function): boolean;
    isSyncFunction(f: Function): boolean;
    isArrowFunction(f: Function): boolean;
    isNonArrowFunction(f: Function): boolean;
}

interface Object {
    preventOverrideClass(classDefinition: any, except?: any[]): boolean;
    preventOverrideFunction(classDefinition: any, functions: string[]): boolean;
}

interface ObjectConstructor {
    getAllPropertyNames(obj: any): string[];
    preventOverrideClass(obj: any, classDefinition: any, except?: any[]): boolean;
    preventOverrideFunction(obj: any, classDefinition: any, functions: string[]): boolean;
}
