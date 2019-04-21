/**
 * Check value is instance of Array
 * @param v the value
 * @returns {boolean}
 */
export function forInstance(v: any): boolean {
    return v instanceof Array;
}

export function equals(array: any[]): boolean {
    if (!(this instanceof Array) || !(array instanceof Array) || this.length !== array.length) return false;

    for (let i = 0, l = this.length; i < l; i++) {
        if (typeof this[i] === typeof array[i] && this[i].equals instanceof Function && array[i].equals instanceof Function) {
            if (!this[i].equals(array[i])) return false;
        } else if (this[i] !== array[i]) return false;
    }
    return true;
}

export function virtualGet(i: number): any {
    if (!(this instanceof Array) || typeof i !== 'number' || !Number.isInteger(i) || this.length === 0)
        return undefined;
    if (i >= 0 && i < this.length) return this[i];
    else return this[((i % this.length) + this.length) % this.length];
}

export function insert(i: number, ...element: any[]): any[] {
    if (this instanceof Array)
        this.splice(i, 0, ...element);
    return this;
}

export function lastIndexOf(o: any): number {
    if (this instanceof Array) {
        for (let i = this.length - 1; i >= 0; i--) {
            if (o == this[i] || (o.equals && o.equals(this[i]))) return i;
        }
    }
    return -1;
}

export function isEmpty(): boolean {
    return isBlank(this);
}

export function isNotEmpty(): boolean {
    return isNotBlank(this);
}

export function isBlank(v: any): boolean {
    return !(v instanceof Array) || v.length == 0;
}

export function isNotBlank(v: any): boolean {
    return v instanceof Array && v.length > 0;
}

function sameValueZero(x, y) {
    return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
}

export function includes(valueToFind: any, fromIndex?: number): boolean {
    if (this == null) throw new TypeError('"this" is null or not defined');

    const o = Object(this);
    const len = o.length >>> 0;
    if (len === 0) return false;
    const n = fromIndex || 0;
    let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    while (k < len) {
        if (sameValueZero(o[k], valueToFind))
            return true;
        k++;
    }
    return false;
}
