const empty = '';
const space = ' ';

function forInstance(v: any): boolean {
    return typeof v === 'string';
}

/**
 * Compare equals with the specified string.
 *
 * @param v the specified string.
 * @returns {boolean} true, if two string is equally.
 */
function equals(v: any): boolean {
    return typeof this === 'string' && typeof v === 'string' && this == v;
}

function equalsIgnoreCase(v: string): boolean {
    if (typeof this !== 'string' || typeof v !== 'string') return false;
    return this.toLowerCase() == v.toLowerCase();
}

/**
 * Check string is empty
 *
 * @returns {boolean}
 */
function isEmpty(): boolean {
    return isBlank(this);
}

/**
 * Check string is not empty
 *
 * @returns {boolean}
 */
function isNotEmpty(): boolean {
    return isNotBlank(this);
}

/**
 * Check string is blank
 *
 * @returns {boolean}
 */
function isBlank(v: any): boolean {
    return typeof v !== 'string' || v.length === 0;
}

/**
 * Check string is not blank
 *
 * @returns {boolean}
 */
function isNotBlank(v: any): boolean {
    return typeof v === 'string' && v.length > 0;
}

interface StringType {
    equals(v: any): boolean;

    equalsIgnoreCase(v: any): boolean;

    isEmpty(): boolean;

    isNotEmpty(): boolean;
}

function valueOf(v: string): StringType | undefined {
    if (!forInstance(v)) return undefined;
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
    forInstance,
    isBlank,
    isNotBlank,
    valueOf
};

export function extend() {
    String.empty = empty;
    String.empty = empty;
    String.isBlank = isBlank;
    String.isNotBlank = isNotBlank;
    String.forInstance = forInstance;

    String.prototype.equals = equals;
    String.prototype.equalsIgnoreCase = equalsIgnoreCase;
    String.prototype.isEmpty = isEmpty;
    String.prototype.isNotEmpty = isNotEmpty;
}
