import {extend as extendArray, type as ArrayType} from './types/ArrayType';
import {extend as extendClass, type as ClassType} from './types/ClassType';
import {extend as extendFunction, type as FunctionType} from './types/FunctionType';
import {extend as extendObject, type as ObjectType} from './types/ObjectType';
import {extend as extendRegular, type as RegexType} from './types/RegexType';
import {extend as extendString, type as StringType} from './types/StringType';

export * from './errors';

export {
    ObjectType,
    ArrayType,
    ClassType,
    FunctionType,
    RegexType,
    StringType
};

export function extend() {
    extendObject();
    extendArray();
    extendClass();
    extendFunction();
    extendRegular();
    extendString();
}
