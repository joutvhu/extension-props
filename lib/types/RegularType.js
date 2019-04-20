"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forInstance(v) {
    return v instanceof RegExp;
}
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
function valueOf(v) {
    if (!forInstance(v))
        return null;
    return {};
}
exports.type = {
    forInstance: forInstance,
    escape: escape,
    matchWords: matchWords,
    valueOf: valueOf
};
function extend() {
    RegExp.escape = escape;
    RegExp.matchWords = matchWords;
    RegExp.forInstance = forInstance;
}
exports.extend = extend;
