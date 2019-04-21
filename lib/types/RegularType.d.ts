import { escape, matchWords, regularForInstance } from '../utils/StringAndRegular';
declare function valueOf(v: RegExp): {} | null;
export declare const type: {
    forInstance: typeof regularForInstance;
    escape: typeof escape;
    matchWords: typeof matchWords;
    valueOf: typeof valueOf;
};
export declare function extend(): void;
export {};
