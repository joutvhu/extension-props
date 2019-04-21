import { type as ArrayType } from './types/ArrayType';
import { type as ClassType } from './types/ClassType';
import { type as FunctionType } from './types/FunctionType';
import { type as ObjectType } from './types/ObjectType';
import { type as RegularType } from './types/RegularType';
import { type as StringType } from './types/StringType';
export * from './errors';
export { ObjectType, ArrayType, ClassType, FunctionType, RegularType, StringType };
export declare function extend(): void;
