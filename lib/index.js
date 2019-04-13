const EObject = require('./types/Array');
const EArray = require('./types/Array');
const EClass = require('./types/Class');
const EFunction = require('./types/Function');
const ERegular = require('./types/Regular');
const EString = require('./types/String');

module.exports = {
    ObjectType: EObject.type,
    ArrayType: EArray.type,
    ClassType: EClass.type,
    FunctionType: EFunction.type,
    RegularType: ERegular.type,
    StringType: EString.type,
    extend() {
        EObject.extend();
        EArray.extend();
        EClass.extend();
        EFunction.extend();
        ERegular.extend();
        EString.extend();
    }
};
