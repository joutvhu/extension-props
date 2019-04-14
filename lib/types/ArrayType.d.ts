/**
 * Check value is instance of Array
 * @param v the value
 * @returns {boolean}
 */
declare function forInstance(v: any): boolean;
declare function isBlank(v: any): boolean;
declare function isNotBlank(v: any): boolean;
interface ArrayType<T> {
    equals(v: T[]): boolean;
    virtualGet(i: number): T;
    insert(index: number, ...element: T[]): T[];
    lastIndexOf(o: T): number;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
}
declare function valueOf(v: any[]): ArrayType<any> | undefined;
export declare const type: {
    forInstance: typeof forInstance;
    isBlank: typeof isBlank;
    isNotBlank: typeof isNotBlank;
    valueOf: typeof valueOf;
};
export declare function extend(): void;
export {};
