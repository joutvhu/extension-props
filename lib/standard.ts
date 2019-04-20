function sameValueZero(x, y) {
    return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
}

function arrayIncludes(valueToFind: any, fromIndex?: number): boolean {
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

export default function standard() {
    if(!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', { value: arrayIncludes });
    }
}
