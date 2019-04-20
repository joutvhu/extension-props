"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sameValueZero(x, y) {
    return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
}
function arrayIncludes(valueToFind, fromIndex) {
    if (this == null)
        throw new TypeError('"this" is null or not defined');
    var o = Object(this);
    var len = o.length >>> 0;
    if (len === 0)
        return false;
    var n = fromIndex || 0;
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    while (k < len) {
        if (sameValueZero(o[k], valueToFind))
            return true;
        k++;
    }
    return false;
}
function standard() {
    if (!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', { value: arrayIncludes });
    }
}
exports.default = standard;
