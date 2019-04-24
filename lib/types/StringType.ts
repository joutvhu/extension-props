import {
    dynamicReplaceAll,
    dynamicReplacePlaceholders,
    empty,
    equals,
    equalsIgnoreCase,
    isBlank,
    isEmpty,
    isNotBlank,
    isNotEmpty,
    replaceAll,
    replacePlaceholders,
    space,
    stringForInstance
} from '../utils/StringAndRegex';

interface StringType {
    equals(v: any): boolean;

    equalsIgnoreCase(v: any): boolean;

    isEmpty(): boolean;

    isNotEmpty(): boolean;

    replaceAll(search, replacement): string;

    replacePlaceholders(map: any): string;
}

function valueOf(v: string): StringType | undefined {
    if (!stringForInstance(v)) return undefined;
    return {
        equals: equals.bind(v),
        equalsIgnoreCase: equalsIgnoreCase.bind(v),
        isEmpty: isEmpty.bind(v),
        isNotEmpty: isNotEmpty.bind(v),
        replaceAll: dynamicReplaceAll.bind(v),
        replacePlaceholders: dynamicReplacePlaceholders.bind(v)
    };
}

export const type = {
    empty,
    space,
    forInstance: stringForInstance,
    isBlank,
    isNotBlank,
    valueOf,
    replaceAll,
    replacePlaceholders
};

export function extend() {
    String.empty = empty;
    String.empty = empty;
    String.isBlank = isBlank;
    String.isNotBlank = isNotBlank;
    String.forInstance = stringForInstance;
    String.replaceAll = replaceAll;
    String.replacePlaceholders = replacePlaceholders;

    String.prototype.equals = equals;
    String.prototype.equalsIgnoreCase = equalsIgnoreCase;
    String.prototype.isEmpty = isEmpty;
    String.prototype.isNotEmpty = isNotEmpty;
    String.prototype.replaceAll = dynamicReplaceAll;
    String.prototype.replacePlaceholders = dynamicReplacePlaceholders;
}
