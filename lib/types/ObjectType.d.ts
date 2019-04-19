declare function getAllPropertyNames(obj: any): string[];
declare function getAllPropertyDescriptor(obj: any, p: string): any;
declare function getAllPropertyDescriptors(obj: any): any;
declare function isBlank(v: any): boolean;
declare function isNotBlank(v: any): boolean;
export declare const type: {
    getAllPropertyNames: typeof getAllPropertyNames;
    getAllPropertyDescriptor: typeof getAllPropertyDescriptor;
    getAllPropertyDescriptors: typeof getAllPropertyDescriptors;
    isBlank: typeof isBlank;
    isNotBlank: typeof isNotBlank;
};
export declare function extend(): void;
export {};
