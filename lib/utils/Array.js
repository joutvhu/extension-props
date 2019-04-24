"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check value is instance of Array
 * @param v the value
 * @returns {boolean}
 */
function forInstance(v) {
    return v instanceof Array;
}
exports.forInstance = forInstance;
function equals(array) {
    if (!(this instanceof Array) || !(array instanceof Array) || this.length !== array.length)
        return false;
    for (var i = 0, l = this.length; i < l; i++) {
        if (typeof this[i] === typeof array[i] && this[i].equals instanceof Function && array[i].equals instanceof Function) {
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] !== array[i])
            return false;
    }
    return true;
}
exports.equals = equals;
function virtualGet(i) {
    if (!(this instanceof Array) || typeof i !== 'number' || !Number.isInteger(i) || this.length === 0)
        return undefined;
    if (i >= 0 && i < this.length)
        return this[i];
    else
        return this[((i % this.length) + this.length) % this.length];
}
exports.virtualGet = virtualGet;
function insert(i) {
    var elements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elements[_i - 1] = arguments[_i];
    }
    if (this instanceof Array)
        this.splice.apply(this, [i, 0].concat(elements));
    return this;
}
exports.insert = insert;
function lastIndexOf(o) {
    if (this instanceof Array) {
        for (var i = this.length - 1; i >= 0; i--) {
            if (o == this[i] || (o.equals && o.equals(this[i])))
                return i;
        }
    }
    return -1;
}
exports.lastIndexOf = lastIndexOf;
function isEmpty() {
    return isBlank(this);
}
exports.isEmpty = isEmpty;
function isNotEmpty() {
    return isNotBlank(this);
}
exports.isNotEmpty = isNotEmpty;
function isBlank(v) {
    return !(v instanceof Array) || v.length == 0;
}
exports.isBlank = isBlank;
function isNotBlank(v) {
    return v instanceof Array && v.length > 0;
}
exports.isNotBlank = isNotBlank;
function sameValueZero(x, y) {
    return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
}
function includes(valueToFind, fromIndex) {
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
exports.includes = includes;
