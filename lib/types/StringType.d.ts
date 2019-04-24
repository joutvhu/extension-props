import { isBlank, isNotBlank, replaceAll, replacePlaceholders, stringForInstance } from '../utils/StringAndRegex';
interface StringType {
    equals(v: any): boolean;
    equalsIgnoreCase(v: any): boolean;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    replaceAll(search: any, replacement: any): string;
    replacePlaceholders(map: any): string;
}
declare function valueOf(v: string): StringType | undefined;
export declare const type: {
    empty: string;
    space: string;
    forInstance: typeof stringForInstance;
    isBlank: typeof isBlank;
    isNotBlank: typeof isNotBlank;
    valueOf: typeof valueOf;
    replaceAll: typeof replaceAll;
    replacePlaceholders: typeof replacePlaceholders;
};
export declare function extend(): void;
export {};
