"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayType_1 = require("./types/ArrayType");
exports.ArrayType = ArrayType_1.type;
var ClassType_1 = require("./types/ClassType");
exports.ClassType = ClassType_1.type;
var FunctionType_1 = require("./types/FunctionType");
exports.FunctionType = FunctionType_1.type;
var ObjectType_1 = require("./types/ObjectType");
exports.ObjectType = ObjectType_1.type;
var RegularType_1 = require("./types/RegularType");
exports.RegularType = RegularType_1.type;
var StringType_1 = require("./types/StringType");
exports.StringType = StringType_1.type;
__export(require("./errors"));
function extend() {
    ObjectType_1.extend();
    ArrayType_1.extend();
    ClassType_1.extend();
    FunctionType_1.extend();
    RegularType_1.extend();
    StringType_1.extend();
}
exports.extend = extend;
