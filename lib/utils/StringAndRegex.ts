export const empty = '';
export const space = ' ';

export function stringForInstance(v: any): boolean {
    return typeof v === 'string';
}

export function regularForInstance(v: any): boolean {
    return v instanceof RegExp;
}

/**
 * Compare equals with the specified string.
 *
 * @param v the specified string.
 * @returns {boolean} true, if two string is equally.
 */
export function equals(v: any): boolean {
    return typeof this === 'string' && typeof v === 'string' && this == v;
}

export function equalsIgnoreCase(v: string): boolean {
    if (typeof this !== 'string' || typeof v !== 'string') return false;
    return this.toLowerCase() == v.toLowerCase();
}

/**
 * Check string is empty
 *
 * @returns {boolean}
 */
export function isEmpty(): boolean {
    return isBlank(this);
}

/**
 * Check string is not empty
 *
 * @returns {boolean}
 */
export function isNotEmpty(): boolean {
    return isNotBlank(this);
}

/**
 * Check string is blank
 *
 * @returns {boolean}
 */
export function isBlank(v: any): boolean {
    return typeof v !== 'string' || v.length === 0;
}

/**
 * Check string is not blank
 *
 * @returns {boolean}
 */
export function isNotBlank(v: any): boolean {
    return typeof v === 'string' && v.length > 0;
}

/**
 * Escape regular expression special characters.
 *
 * @param str
 * @returns {string|void | string | never} a string of Regular
 */
export function escape(str: string): string {
    if (typeof str !== 'string' || str.length === 0) return '';
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 *
 * @param str
 * @returns {string} a string of Regex
 */
export function matchWords(str: string): string {
    if (typeof str !== 'string' || str.length === 0) return '';
    const s = str.trim().replace(/ +/g, ' ');
    if (s.length === 0) return '';
    return '(' + s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
        .replace(/ /g, ')|(') + ')';
}
