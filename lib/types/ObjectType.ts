import {
    getAllPropertyDescriptor,
    getAllPropertyDescriptors,
    getAllPropertyNames,
    isBlank,
    isNotBlank
} from '../utils/Object';

export const type = {
    getAllPropertyDescriptor,
    getAllPropertyDescriptors,
    getAllPropertyNames,
    isBlank,
    isNotBlank
};

export function extend() {
    Object.getAllPropertyDescriptor = getAllPropertyDescriptor;
    Object.getAllPropertyDescriptors = getAllPropertyDescriptors;
    Object.getAllPropertyNames = getAllPropertyNames;
    Object.isBlank = isBlank;
    Object.isNotBlank = isNotBlank;
}
