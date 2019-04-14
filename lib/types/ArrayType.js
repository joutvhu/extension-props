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
function virtualGet(i) {
    if (!(this instanceof Array) || typeof i !== 'number' || !Number.isInteger(i) || this.length === 0)
        return undefined;
    if (i >= 0 && i < this.length)
        return this[i];
    else
        return this[((i % this.length) + this.length) % this.length];
}
function insert(i) {
    var element = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        element[_i - 1] = arguments[_i];
    }
    if (this instanceof Array)
        this.splice.apply(this, [i, 0].concat(element));
    return this;
}
function lastIndexOf(o) {
    if (this instanceof Array) {
        for (var i = this.length - 1; i >= 0; i--) {
            if (o == this[i] || (o.equals && o.equals(this[i])))
                return i;
        }
    }
    return -1;
}
function isEmpty() {
    return isBlank(this);
}
function isNotEmpty() {
    return isNotBlank(this);
}
function isBlank(v) {
    return !(v instanceof Array) || v.length == 0;
}
function isNotBlank(v) {
    return v instanceof Array && v.length > 0;
}
function valueOf(v) {
    if (!forInstance(v))
        return undefined;
    return {
        equals: equals.bind(v),
        virtualGet: virtualGet.bind(v),
        insert: insert.bind(v),
        lastIndexOf: lastIndexOf.bind(v),
        isEmpty: isEmpty.bind(v),
        isNotEmpty: isNotEmpty.bind(v)
    };
}
exports.type = {
    forInstance: forInstance,
    isBlank: isBlank,
    isNotBlank: isNotBlank,
    valueOf: valueOf
};
function extend() {
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
exports.extend = extend;
