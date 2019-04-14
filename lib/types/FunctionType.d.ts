declare function forInstance(v: any): boolean;
declare function defineFunction(name: string, _prototype?: Function): Function | undefined;
declare function isNormalFunction(f: Function): boolean;
declare function isAsyncFunction(f: Function): boolean;
declare function isSyncFunction(f: Function): boolean;
declare function isArrowFunction(f: Function): boolean;
declare function isNonArrowFunction(f: Function): boolean;
interface FunctionType {
    clone(): Function;
    defineClass(name: string, superClass?: any): any;
    defineFunction(name: string): Function | undefined;
}
declare function valueOf(v: any): FunctionType | undefined;
export declare const type: {
    forInstance: typeof forInstance;
    defineFunction: typeof defineFunction;
    isNormalFunction: typeof isNormalFunction;
    isAsyncFunction: typeof isAsyncFunction;
    isSyncFunction: typeof isSyncFunction;
    isArrowFunction: typeof isArrowFunction;
    isNonArrowFunction: typeof isNonArrowFunction;
    valueOf: typeof valueOf;
};
export declare function extend(): void;
export {};
