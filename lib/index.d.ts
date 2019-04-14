import { type as ObjectType } from './types/ObjectType';
import { type as ArrayType } from './types/ArrayType';
import { type as StringType } from './types/StringType';
import { type as RegularType } from './types/RegularType';
import { type as FunctionType } from './types/FunctionType';
import { type as ClassType } from './types/ClassType';
export { default as OverridingError } from './errors/OverridingError';
export { ObjectType, ArrayType, ClassType, FunctionType, RegularType, StringType };
export declare function extend(): void;
