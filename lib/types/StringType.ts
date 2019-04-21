import {
    empty,
    equals,
    equalsIgnoreCase,
    isBlank,
    isEmpty,
    isNotBlank,
    isNotEmpty,
    space,
    stringForInstance
} from '../utils/StringAndRegular';

interface StringType {
    equals(v: any): boolean;

    equalsIgnoreCase(v: any): boolean;

    isEmpty(): boolean;

    isNotEmpty(): boolean;
}

function valueOf(v: string): StringType | undefined {
    if (!stringForInstance(v)) return undefined;
    return {
        equals: equals.bind(v),
        equalsIgnoreCase: equalsIgnoreCase.bind(v),
        isEmpty: isEmpty.bind(v),
        isNotEmpty: isNotEmpty.bind(v)
    };
}

export const type = {
    empty,
    space,
    forInstance: stringForInstance,
    isBlank,
    isNotBlank,
    valueOf
};

export function extend() {
    String.empty = empty;
    String.empty = empty;
    String.isBlank = isBlank;
    String.isNotBlank = isNotBlank;
    String.forInstance = stringForInstance;

    String.prototype.equals = equals;
    String.prototype.equalsIgnoreCase = equalsIgnoreCase;
    String.prototype.isEmpty = isEmpty;
    String.prototype.isNotEmpty = isNotEmpty;
}
