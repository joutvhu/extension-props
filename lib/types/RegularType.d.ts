declare function forInstance(v: any): boolean;
/**
 *
 * @param str
 * @returns {string|void | string | never} a string of Regular
 */
declare function escape(str: string): string;
/**
 *
 * @param str
 * @returns {string} a string of Regular
 */
declare function matchWords(str: string): string;
declare function valueOf(v: RegExp): {} | null;
export declare const type: {
    forInstance: typeof forInstance;
    escape: typeof escape;
    matchWords: typeof matchWords;
    valueOf: typeof valueOf;
};
export declare function extend(): void;
export {};
