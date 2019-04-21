import { defineFunction, functionForInstance, isArrowFunction, isAsyncFunction, isNonArrowFunction, isNormalFunction, isSyncFunction } from '../utils/ClassAndFunction';
interface FunctionType {
    clone(): Function;
    defineClass(name: string, superClass?: any): any;
    defineFunction(name: string): Function | undefined;
}
declare function valueOf(v: any): FunctionType | undefined;
export declare const type: {
    forInstance: typeof functionForInstance;
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
