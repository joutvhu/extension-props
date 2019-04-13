const {isBlank} = require('./String').type;

/**
 *
 * @param str
 * @returns {string|void | string | never} a string of Regular
 */
function escape(str) {
    if (isBlank(str)) return '';
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 *
 * @param str
 * @returns {string} a string of Regular
 */
function matchWords(str) {
    if (isBlank(str)) return '';
    return '(' + str.trim().replace(/ +/g, ' ')
        .replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
        .replace(/ /g, ')|(') + ')';
}

function forInstance(v) {
    return v instanceof RegExp;
}

function valueOf(v) {
    if (!forInstance(v)) return null;
    return {};
}

module.exports = {
    type: {
        escape,
        matchWords,
        forInstance,
        valueOf
    },
    extend() {
        RegExp.escape = escape;
        RegExp.matchWords = matchWords;
        RegExp.forInstance = forInstance;
    }
};
