declare function getAllPropertyNames(obj: Object): string[];
declare function getAllPropertyDescriptors(obj: Object): any;
declare function isBlank(v: any): boolean;
declare function isNotBlank(v: any): boolean;
export declare const type: {
    getAllPropertyNames: typeof getAllPropertyNames;
    getAllPropertyDescriptors: typeof getAllPropertyDescriptors;
    isBlank: typeof isBlank;
    isNotBlank: typeof isNotBlank;
};
export declare function extend(): void;
export {};
