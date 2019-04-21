"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringAndRegular_1 = require("../utils/StringAndRegular");
function valueOf(v) {
    if (!StringAndRegular_1.regularForInstance(v))
        return null;
    return {};
}
exports.type = {
    forInstance: StringAndRegular_1.regularForInstance,
    escape: StringAndRegular_1.escape,
    matchWords: StringAndRegular_1.matchWords,
    valueOf: valueOf
};
function extend() {
    RegExp.escape = StringAndRegular_1.escape;
    RegExp.matchWords = StringAndRegular_1.matchWords;
    RegExp.forInstance = StringAndRegular_1.regularForInstance;
}
exports.extend = extend;
