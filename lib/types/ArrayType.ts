import {
    equals,
    forInstance,
    includes,
    insert,
    isBlank,
    isEmpty,
    isNotBlank,
    isNotEmpty,
    lastIndexOf,
    virtualGet
} from '../utils/Array';

if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {value: includes});
}

interface ArrayType<T> {
    equals(v: T[]): boolean;

    virtualGet(i: number): T;

    insert(index: number, ...element: T[]): T[];

    lastIndexOf(o: T): number;

    isEmpty(): boolean;

    isNotEmpty(): boolean;
}

function valueOf(v: any[]): ArrayType<any> | undefined {
    if (!forInstance(v)) return undefined;
    return {
        equals: equals.bind(v),
        virtualGet: virtualGet.bind(v),
        insert: insert.bind(v),
        lastIndexOf: lastIndexOf.bind(v),
        isEmpty: isEmpty.bind(v),
        isNotEmpty: isNotEmpty.bind(v)
    };
}

export const type = {
    forInstance,
    isBlank,
    isNotBlank,
    valueOf
};

export function extend() {
    Array.isBlank = isBlank;
    Array.isNotBlank = isNotBlank;
    Array.forInstance = forInstance;

    Array.prototype.equals = equals;
    Array.prototype.virtualGet = virtualGet;
    Array.prototype.insert = insert;
    Array.prototype.lastIndexOf = lastIndexOf;
    Array.prototype.isEmpty = isEmpty;
    Array.prototype.isNotEmpty = isNotEmpty;
}
