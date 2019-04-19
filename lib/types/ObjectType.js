"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllPropertyNames(obj) {
    var result = [];
    var temp;
    var i;
    if (obj) {
        if (obj.constructor === {}.constructor)
            return Object.getOwnPropertyNames(obj);
        try {
            while (obj.constructor !== Object) {
                temp = Object.getOwnPropertyNames(obj);
                for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                    i = temp_1[_i];
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
function getAllPropertyDescriptor(obj, p) {
    var names;
    var i, temp;
    if (obj) {
        if (obj.constructor === {}.constructor) {
            names = Object.getOwnPropertyNames(obj);
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                i = names_1[_i];
                if (i == p) {
                    temp = Object.getOwnPropertyDescriptor(obj, i);
                    if (temp !== undefined)
                        return temp;
                }
            }
        }
        else {
            try {
                while (obj.constructor !== Object) {
                    names = Object.getOwnPropertyNames(obj);
                    for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
                        i = names_2[_a];
                        if (i == p) {
                            temp = Object.getOwnPropertyDescriptor(obj, i);
                            if (temp !== undefined)
                                return temp;
                        }
                    }
                    obj = Object.getPrototypeOf(obj);
                }
            }
            catch (e) {
                // continue regardless of error
            }
        }
    }
    return undefined;
}
function getAllPropertyDescriptors(obj) {
    var result = {};
    var names;
    var i, temp;
    if (obj) {
        if (obj.constructor === {}.constructor) {
            names = Object.getOwnPropertyNames(obj);
            for (var _i = 0, names_3 = names; _i < names_3.length; _i++) {
                i = names_3[_i];
                temp = Object.getOwnPropertyDescriptor(obj, i);
                if (temp !== undefined)
                    result[i] = temp;
            }
        }
        else {
            try {
                while (obj.constructor !== Object) {
                    names = Object.getOwnPropertyNames(obj);
                    for (var _a = 0, names_4 = names; _a < names_4.length; _a++) {
                        i = names_4[_a];
                        if (result[i] === undefined ||
                            (i === 'constructor' && result[i].constructor !== {}.constructor)) {
                            temp = Object.getOwnPropertyDescriptor(obj, i);
                            if (temp !== undefined)
                                result[i] = temp;
                        }
                    }
                    obj = Object.getPrototypeOf(obj);
                }
            }
            catch (e) {
                // continue regardless of error
            }
        }
    }
    return result;
}
function isBlank(v) {
    return v === undefined || v === null;
}
function isNotBlank(v) {
    return v !== undefined && v !== null;
}
exports.type = {
    getAllPropertyNames: getAllPropertyNames,
    getAllPropertyDescriptor: getAllPropertyDescriptor,
    getAllPropertyDescriptors: getAllPropertyDescriptors,
    isBlank: isBlank,
    isNotBlank: isNotBlank
};
function extend() {
    Object.getAllPropertyNames = getAllPropertyNames;
    Object.getAllPropertyDescriptor = getAllPropertyDescriptor;
    Object.getAllPropertyDescriptors = getAllPropertyDescriptors;
    Object.isBlank = isBlank;
    Object.isNotBlank = isNotBlank;
}
exports.extend = extend;
