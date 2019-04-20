function forInstance(v: any): boolean {
    return v instanceof RegExp;
}

/**
 *
 * @param str
 * @returns {string|void | string | never} a string of Regular
 */
function escape(str: string): string {
    if (typeof str !== 'string' || str.length === 0) return '';
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 *
 * @param str
 * @returns {string} a string of Regular
 */
function matchWords(str: string): string {
    if (typeof str !== 'string' || str.length === 0) return '';
    const s = str.trim().replace(/ +/g, ' ');
    if (s.length === 0) return '';
    return '(' + s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
        .replace(/ /g, ')|(') + ')';
}

function valueOf(v: RegExp) {
    if (!forInstance(v)) return null;
    return {};
}

export const type = {
    forInstance,
    escape,
    matchWords,
    valueOf
};

export function extend() {
    RegExp.escape = escape;
    RegExp.matchWords = matchWords;
    RegExp.forInstance = forInstance;
}
