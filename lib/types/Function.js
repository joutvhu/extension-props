const {type: typeClass} = require('./Class');

function clone() {
    const that = this;
    const temp = function temporary() {
        return that.apply(this, arguments);
    };
    let key;
    for (key in this) {
        if (this.hasOwnProperty(key)) temp[key] = this[key];
    }
    return temp;
}

function defineFunction(name, _prototype) {
    let temp;
    let statements = 'temp = function ' + name + '() {\n';
    if (_prototype instanceof Function)
        statements += '    return _prototype.apply(this, arguments)\n';
    statements += '}';
    eval(statements);
    return temp;
}

function dynamicDefineFunction(name) {
    return defineFunction(name, this);
}

function defineClass(name, superClass) {
    return typeClass.defineClass(name, superClass, this);
}

function forInstance(v) {
    return v instanceof Function;
}

function valueOf(v) {
    if (!forInstance(v)) return null;
    return {
        clone: clone.bind(v),
        defineFunction: defineFunction.bind(v),
        defineClass: defineClass.bind(v)
    };
}

module.exports = {
    type: {
        defineFunction,
        forInstance,
        valueOf
    },
    extend() {
        Function.defineFunction = defineFunction;

        Function.prototype.clone = clone;
        Function.prototype.defineFunction = dynamicDefineFunction;
        Function.prototype.defineClass = defineClass;
    }
};
