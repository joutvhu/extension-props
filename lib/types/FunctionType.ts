import {
    clone,
    defineFunction,
    dynamicDefineFunction,
    functionForInstance,
    isArrowFunction,
    isAsyncFunction,
    isCallable,
    isNonArrowFunction,
    isNormalFunction,
    isSyncFunction
} from '../utils/ClassAndFunction';

interface FunctionType {
    clone(): Function;

    defineFunction(name: string): Function | undefined;
}

function valueOf(v: any): FunctionType | undefined {
    if (!functionForInstance(v) || v.prototype === undefined) return undefined;
    return {
        clone: clone.bind(v),
        defineFunction: dynamicDefineFunction.bind(v)
    };
}

export const type = {
    forInstance: functionForInstance,
    defineFunction,
    isCallable,
    isNormalFunction,
    isAsyncFunction,
    isSyncFunction,
    isArrowFunction,
    isNonArrowFunction,
    valueOf
};

export function extend() {
    Function.defineFunction = defineFunction;
    Function.isCallable = isCallable;
    Function.isNormalFunction = isNormalFunction;
    Function.isAsyncFunction = isAsyncFunction;
    Function.isSyncFunction = isSyncFunction;
    Function.isArrowFunction = isArrowFunction;
    Function.isNonArrowFunction = isNonArrowFunction;
    Function.functionForInstance = functionForInstance;

    Function.prototype.clone = clone;
    Function.prototype.defineFunction = dynamicDefineFunction;
}
