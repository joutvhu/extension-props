import {default as standard} from './standard';
import {extend as extendObject, type as ObjectType} from './types/ObjectType';
import {extend as extendArray, type as ArrayType} from './types/ArrayType';
import {extend as extendString, type as StringType} from './types/StringType';
import {extend as extendRegular, type as RegularType} from './types/RegularType';
import {extend as extendFunction, type as FunctionType} from './types/FunctionType';
import {extend as extendClass, type as ClassType} from './types/ClassType';

standard();

export {default as OverridingError} from './errors/OverridingError';

export {
    ObjectType,
    ArrayType,
    ClassType,
    FunctionType,
    RegularType,
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
