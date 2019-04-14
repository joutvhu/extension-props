"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllPropertyNames(obj) {
    var result = [];
    var temp;
    if (obj) {
        if (obj.constructor === {}.constructor)
            return Object.getOwnPropertyNames(obj);
        try {
            while (obj.constructor !== Object) {
                temp = Object.getOwnPropertyNames(obj);
                for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                    var i = temp_1[_i];
                    if (!result.includes(i))
                        result.push(i);
                }
                obj = Object.getPrototypeOf(obj);
            }
        }
        catch (e) {
            // continue regardless of error
        }
    }
    return result;
}
exports.type = {
    getAllPropertyNames: getAllPropertyNames
};
function extend() {
    Object.getAllPropertyNames = getAllPropertyNames;
}
exports.extend = extend;
