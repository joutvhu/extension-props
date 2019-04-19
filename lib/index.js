"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var standard_1 = __importDefault(require("./standard"));
var ObjectType_1 = require("./types/ObjectType");
exports.ObjectType = ObjectType_1.type;
var ArrayType_1 = require("./types/ArrayType");
exports.ArrayType = ArrayType_1.type;
var StringType_1 = require("./types/StringType");
exports.StringType = StringType_1.type;
var RegularType_1 = require("./types/RegularType");
exports.RegularType = RegularType_1.type;
var FunctionType_1 = require("./types/FunctionType");
exports.FunctionType = FunctionType_1.type;
var ClassType_1 = require("./types/ClassType");
exports.ClassType = ClassType_1.type;
standard_1.default();
var OverridingError_1 = require("./errors/OverridingError");
exports.OverridingError = OverridingError_1.default;
function extend() {
    ObjectType_1.extend();
    ArrayType_1.extend();
    ClassType_1.extend();
    FunctionType_1.extend();
    RegularType_1.extend();
    StringType_1.extend();
}
exports.extend = extend;
