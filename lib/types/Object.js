function isBlank(obj) {
    return obj == null;
}

function isNotBlank(obj) {
    return obj != null;
}

function forInstance(v) {
    return typeof v === 'object';
}

function valueOf(v) {
    if (!forInstance(v)) return null;
    return {
    };
}

module.exports = {
    type: {
        isBlank,
        isNotBlank,
        forInstance,
        valueOf
    },
    extend() {
        Object.isBlank = isBlank;
        Object.isNotBlank = isNotBlank;
    }
};

