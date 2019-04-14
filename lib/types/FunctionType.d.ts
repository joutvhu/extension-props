declare function forInstance(v: any): boolean;
declare function defineFunction(name: string, _prototype?: Function): Function | undefined;
interface FunctionType {
    clone(): Function;
    defineClass(name: string, superClass?: any): any;
    defineFunction(name: string): Function | undefined;
}
declare function valueOf(v: any): FunctionType | undefined;
export declare const type: {
    forInstance: typeof forInstance;
    defineFunction: typeof defineFunction;
    valueOf: typeof valueOf;
};
export declare function extend(): void;
export {};
