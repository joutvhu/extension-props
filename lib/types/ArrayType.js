"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Array_1 = require("../utils/Array");
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', { value: Array_1.includes });
}
function valueOf(v) {
    if (!Array_1.forInstance(v))
        return undefined;
    return {
        equals: Array_1.equals.bind(v),
        virtualGet: Array_1.virtualGet.bind(v),
        insert: Array_1.insert.bind(v),
        lastIndexOf: Array_1.lastIndexOf.bind(v),
        isEmpty: Array_1.isEmpty.bind(v),
        isNotEmpty: Array_1.isNotEmpty.bind(v)
    };
}
exports.type = {
    forInstance: Array_1.forInstance,
    isBlank: Array_1.isBlank,
    isNotBlank: Array_1.isNotBlank,
    valueOf: valueOf
};
function extend() {
    Array.isBlank = Array_1.isBlank;
    Array.isNotBlank = Array_1.isNotBlank;
    Array.forInstance = Array_1.forInstance;
    Array.prototype.equals = Array_1.equals;
    Array.prototype.virtualGet = Array_1.virtualGet;
    Array.prototype.insert = Array_1.insert;
    Array.prototype.lastIndexOf = Array_1.lastIndexOf;
    Array.prototype.isEmpty = Array_1.isEmpty;
    Array.prototype.isNotEmpty = Array_1.isNotEmpty;
}
exports.extend = extend;
