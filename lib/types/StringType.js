"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringAndRegular_1 = require("../utils/StringAndRegular");
function valueOf(v) {
    if (!StringAndRegular_1.stringForInstance(v))
        return undefined;
    return {
        equals: StringAndRegular_1.equals.bind(v),
        equalsIgnoreCase: StringAndRegular_1.equalsIgnoreCase.bind(v),
        isEmpty: StringAndRegular_1.isEmpty.bind(v),
        isNotEmpty: StringAndRegular_1.isNotEmpty.bind(v)
    };
}
exports.type = {
    empty: StringAndRegular_1.empty,
    space: StringAndRegular_1.space,
    forInstance: StringAndRegular_1.stringForInstance,
    isBlank: StringAndRegular_1.isBlank,
    isNotBlank: StringAndRegular_1.isNotBlank,
    valueOf: valueOf
};
function extend() {
    String.empty = StringAndRegular_1.empty;
    String.empty = StringAndRegular_1.empty;
    String.isBlank = StringAndRegular_1.isBlank;
    String.isNotBlank = StringAndRegular_1.isNotBlank;
    String.forInstance = StringAndRegular_1.stringForInstance;
    String.prototype.equals = StringAndRegular_1.equals;
    String.prototype.equalsIgnoreCase = StringAndRegular_1.equalsIgnoreCase;
    String.prototype.isEmpty = StringAndRegular_1.isEmpty;
    String.prototype.isNotEmpty = StringAndRegular_1.isNotEmpty;
}
exports.extend = extend;
