"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empty = '';
exports.space = ' ';
function stringForInstance(v) {
    return typeof v === 'string';
}
exports.stringForInstance = stringForInstance;
function regularForInstance(v) {
    return v instanceof RegExp;
}
exports.regularForInstance = regularForInstance;
/**
 * Compare equals with the specified string.
 *
 * @param v the specified string.
 * @returns {boolean} true, if two string is equally.
 */
function equals(v) {
    return typeof this === 'string' && typeof v === 'string' && this == v;
}
exports.equals = equals;
function equalsIgnoreCase(v) {
    if (typeof this !== 'string' || typeof v !== 'string')
        return false;
    return this.toLowerCase() == v.toLowerCase();
}
exports.equalsIgnoreCase = equalsIgnoreCase;
/**
 * Check string is empty
 *
 * @returns {boolean}
 */
function isEmpty() {
    return isBlank(this);
}
exports.isEmpty = isEmpty;
/**
 * Check string is not empty
 *
 * @returns {boolean}
 */
function isNotEmpty() {
    return isNotBlank(this);
}
exports.isNotEmpty = isNotEmpty;
/**
 * Check string is blank
 *
 * @returns {boolean}
 */
function isBlank(v) {
    return typeof v !== 'string' || v.length === 0;
}
exports.isBlank = isBlank;
/**
 * Check string is not blank
 *
 * @returns {boolean}
 */
function isNotBlank(v) {
    return typeof v === 'string' && v.length > 0;
}
exports.isNotBlank = isNotBlank;
/**
 *
 * @param str
 * @returns {string|void | string | never} a string of Regular
 */
function escape(str) {
    if (typeof str !== 'string' || str.length === 0)
        return '';
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
exports.escape = escape;
/**
 *
 * @param str
 * @returns {string} a string of Regular
 */
function matchWords(str) {
    if (typeof str !== 'string' || str.length === 0)
        return '';
    var s = str.trim().replace(/ +/g, ' ');
    if (s.length === 0)
        return '';
    return '(' + s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
        .replace(/ /g, ')|(') + ')';
}
exports.matchWords = matchWords;
