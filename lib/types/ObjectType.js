"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Object_1 = require("../utils/Object");
exports.type = {
    getAllPropertyDescriptor: Object_1.getAllPropertyDescriptor,
    getAllPropertyDescriptors: Object_1.getAllPropertyDescriptors,
    getAllPropertyNames: Object_1.getAllPropertyNames,
    isBlank: Object_1.isBlank,
    isNotBlank: Object_1.isNotBlank
};
function extend() {
    Object.getAllPropertyDescriptor = Object_1.getAllPropertyDescriptor;
    Object.getAllPropertyDescriptors = Object_1.getAllPropertyDescriptors;
    Object.getAllPropertyNames = Object_1.getAllPropertyNames;
    Object.isBlank = Object_1.isBlank;
    Object.isNotBlank = Object_1.isNotBlank;
}
exports.extend = extend;
