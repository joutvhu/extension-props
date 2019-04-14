/**
 * Check value is instance of Array
 * @param v the value
 * @returns {boolean}
 */
function forInstance(v: any): boolean {
    return v instanceof Array;
}

function equals(array: any[]): boolean {
    if (!(this instanceof Array) || !(array instanceof Array) || this.length !== array.length) return false;

    for (let i = 0, l = this.length; i < l; i++) {
        if (typeof this[i] === typeof array[i] && this[i].equals instanceof Function && array[i].equals instanceof Function) {
            if (!this[i].equals(array[i])) return false;
        } else if (this[i] !== array[i]) return false;
    }
    return true;
}

function virtualGet(i: number): any {
    if (!(this instanceof Array) || typeof i !== 'number' || !Number.isInteger(i) || this.length === 0)
        return undefined;
    if (i >= 0 && i < this.length) return this[i];
    else return this[((i % this.length) + this.length) % this.length];
}

function insert(i: number, ...element: any[]): any[] {
    if (this instanceof Array)
        this.splice(i, 0, ...element);
    return this;
}

function lastIndexOf(o: any): number {
    if (this instanceof Array) {
        for (let i = this.length - 1; i >= 0; i--) {
            if (o == this[i] || (o.equals && o.equals(this[i]))) return i;
        }
    }
    return -1;
}

function isEmpty(): boolean {
    return isBlank(this);
}

function isNotEmpty(): boolean {
    return isNotBlank(this);
}

function isBlank(v: any): boolean {
    return !(v instanceof Array) || v.length == 0;
}

function isNotBlank(v: any): boolean {
    return v instanceof Array && v.length > 0;
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
