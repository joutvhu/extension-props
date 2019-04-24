import { isBlank, isNotBlank, stringForInstance } from '../utils/StringAndRegex';
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
    forInstance: typeof stringForInstance;
    isBlank: typeof isBlank;
    isNotBlank: typeof isNotBlank;
    valueOf: typeof valueOf;
};
export declare function extend(): void;
export {};
