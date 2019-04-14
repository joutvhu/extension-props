declare function forInstance(v: any): boolean;
/**
 * Check string is blank
 *
 * @returns {boolean}
 */
declare function isBlank(v: any): boolean;
/**
 * Check string is not blank
 *
 * @returns {boolean}
 */
declare function isNotBlank(v: any): boolean;
interface StringType {
    equals(v: any): boolean;
    equalsIgnoreCase(v: any): boolean;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
}
declare function valueOf(v: string): StringType | undefined;
export declare const type: {
    empty: string;
    space: string;
    forInstance: typeof forInstance;
    isBlank: typeof isBlank;
    isNotBlank: typeof isNotBlank;
    valueOf: typeof valueOf;
};
export declare function extend(): void;
export {};
