import {
    clone,
    defineFunction,
    dynamicDefineClass,
    dynamicDefineFunction,
    functionForInstance,
    isArrowFunction,
    isAsyncFunction,
    isNonArrowFunction,
    isNormalFunction,
    isSyncFunction
} from '../utils/ClassAndFunction';

interface FunctionType {
    clone(): Function;

    defineClass(name: string, superClass?: any);

    defineFunction(name: string): Function | undefined;
}

function valueOf(v: any): FunctionType | undefined {
    if (!functionForInstance(v) || v.prototype === undefined) return undefined;
    return {
        clone: clone.bind(v),
        defineFunction: defineFunction.bind(v),
        defineClass: dynamicDefineClass.bind(v)
    };
}

export const type = {
    forInstance: functionForInstance,
    defineFunction,
    isNormalFunction,
    isAsyncFunction,
    isSyncFunction,
    isArrowFunction,
    isNonArrowFunction,
    valueOf
};

export function extend() {
    Function.defineFunction = defineFunction;
    Function.isNormalFunction = isNormalFunction;
    Function.isAsyncFunction = isAsyncFunction;
    Function.isSyncFunction = isSyncFunction;
    Function.isArrowFunction = isArrowFunction;
    Function.isNonArrowFunction = isNonArrowFunction;

    Function.prototype.clone = clone;
    Function.prototype.defineFunction = dynamicDefineFunction;
    Function.prototype.defineClass = dynamicDefineClass;
}
