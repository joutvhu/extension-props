"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringAndRegex_1 = require("../utils/StringAndRegex");
function valueOf(v) {
    if (!StringAndRegex_1.stringForInstance(v))
        return undefined;
    return {
        equals: StringAndRegex_1.equals.bind(v),
        equalsIgnoreCase: StringAndRegex_1.equalsIgnoreCase.bind(v),
        isEmpty: StringAndRegex_1.isEmpty.bind(v),
        isNotEmpty: StringAndRegex_1.isNotEmpty.bind(v),
        replaceAll: StringAndRegex_1.dynamicReplaceAll.bind(v),
        replacePlaceholders: StringAndRegex_1.dynamicReplacePlaceholders.bind(v)
    };
}
exports.type = {
    empty: StringAndRegex_1.empty,
    space: StringAndRegex_1.space,
    forInstance: StringAndRegex_1.stringForInstance,
    isBlank: StringAndRegex_1.isBlank,
    isNotBlank: StringAndRegex_1.isNotBlank,
    valueOf: valueOf,
    replaceAll: StringAndRegex_1.replaceAll,
    replacePlaceholders: StringAndRegex_1.replacePlaceholders
};
function extend() {
    String.empty = StringAndRegex_1.empty;
    String.empty = StringAndRegex_1.empty;
    String.isBlank = StringAndRegex_1.isBlank;
    String.isNotBlank = StringAndRegex_1.isNotBlank;
    String.forInstance = StringAndRegex_1.stringForInstance;
    String.replaceAll = StringAndRegex_1.replaceAll;
    String.replacePlaceholders = StringAndRegex_1.replacePlaceholders;
    String.prototype.equals = StringAndRegex_1.equals;
    String.prototype.equalsIgnoreCase = StringAndRegex_1.equalsIgnoreCase;
    String.prototype.isEmpty = StringAndRegex_1.isEmpty;
    String.prototype.isNotEmpty = StringAndRegex_1.isNotEmpty;
    String.prototype.replaceAll = StringAndRegex_1.dynamicReplaceAll;
    String.prototype.replacePlaceholders = StringAndRegex_1.dynamicReplacePlaceholders;
}
exports.extend = extend;
