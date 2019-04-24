"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringAndRegex_1 = require("../utils/StringAndRegex");
function valueOf(v) {
    if (!StringAndRegex_1.regularForInstance(v))
        return null;
    return {};
}
exports.type = {
    forInstance: StringAndRegex_1.regularForInstance,
    escape: StringAndRegex_1.escape,
    matchWords: StringAndRegex_1.matchWords,
    valueOf: valueOf
};
function extend() {
    RegExp.forInstance = StringAndRegex_1.regularForInstance;
    RegExp.escape = StringAndRegex_1.escape;
    RegExp.matchWords = StringAndRegex_1.matchWords;
    RegExp.forInstance = StringAndRegex_1.regularForInstance;
}
exports.extend = extend;
