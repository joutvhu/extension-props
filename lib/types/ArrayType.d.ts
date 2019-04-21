import { forInstance, isBlank, isNotBlank } from '../utils/Array';
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
