"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empty = '';
var space = ' ';
function forInstance(v) {
    return typeof v === 'string';
}
/**
 * Compare equals with the specified string.
 *
 * @param v the specified string.
 * @returns {boolean} true, if two string is equally.
 */
function equals(v) {
    return typeof this === 'string' && typeof v === 'string' && this == v;
}
function equalsIgnoreCase(v) {
    if (typeof this !== 'string' || typeof v !== 'string')
        return false;
    return this.toLowerCase() == v.toLowerCase();
}
/**
 * Check string is empty
 *
 * @returns {boolean}
 */
function isEmpty() {
    return isBlank(this);
}
/**
 * Check string is not empty
 *
 * @returns {boolean}
 */
function isNotEmpty() {
    return isNotBlank(this);
}
/**
 * Check string is blank
 *
 * @returns {boolean}
 */
function isBlank(v) {
    return typeof v !== 'string' || v.length === 0;
}
/**
 * Check string is not blank
 *
 * @returns {boolean}
 */
function isNotBlank(v) {
    return typeof v === 'string' && v.length > 0;
}
function valueOf(v) {
    if (!forInstance(v))
        return undefined;
    return {
        equals: equals.bind(v),
        equalsIgnoreCase: equalsIgnoreCase.bind(v),
        isEmpty: isEmpty.bind(v),
        isNotEmpty: isNotEmpty.bind(v)
    };
}
exports.type = {
    empty: empty,
    space: space,
    forInstance: forInstance,
    isBlank: isBlank,
    isNotBlank: isNotBlank,
    valueOf: valueOf
};
function extend() {
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
exports.extend = extend;
