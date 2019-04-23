export declare const empty = "";
export declare const space = " ";
export declare function stringForInstance(v: any): boolean;
export declare function regularForInstance(v: any): boolean;
/**
 * Compare equals with the specified string.
 *
 * @param v the specified string.
 * @returns {boolean} true, if two string is equally.
 */
export declare function equals(v: any): boolean;
export declare function equalsIgnoreCase(v: string): boolean;
/**
 * Check string is empty
 *
 * @returns {boolean}
 */
export declare function isEmpty(): boolean;
/**
 * Check string is not empty
 *
 * @returns {boolean}
 */
export declare function isNotEmpty(): boolean;
/**
 * Check string is blank
 *
 * @returns {boolean}
 */
export declare function isBlank(v: any): boolean;
/**
 * Check string is not blank
 *
 * @returns {boolean}
 */
export declare function isNotBlank(v: any): boolean;
/**
 * Escape regular expression special characters.
 *
 * @param str
 * @returns {string|void | string | never} a string of Regular
 */
export declare function escape(str: string): string;
/**
 *
 * @param str
 * @returns {string} a string of Regular
 */
export declare function matchWords(str: string): string;
