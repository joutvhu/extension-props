const empty = [];

function equals(array) {
    if (!array || !(array instanceof Array) || this.length !== array.length) return false;

    for (let i = 0, l = this.length; i < l; i++) {
        if (typeof this[i] === typeof array[i] && this[i].equals instanceof Function && array[i].equals instanceof Function) {
            if (!this[i].equals(array[i])) return false;
        } else if (this[i] !== array[i]) return false;
    }
    return true;
}

function virtualGet(i) {
    if (i >= 0 && i < this.length) return this[i];
    else if (i < 0 && this.length + i >= 0)
        return this[this.length + i];
    else return undefined;
}

function insert(index, ...element) {
    this.splice(index, 0, ...element);
}

function lastIndexOf(o) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (o == this[i] || (o.equals && o.equals(this[i]))) return i;
    }
    return -1;
}

function isEmpty() {
    return this.length == 0;
}

function isNotEmpty() {
    return this.length > 0;
}

function isBlank(arr) {
    return arr == null || !(arr instanceof Array) || arr.length == 0;
}

function isNotBlank(arr) {
    return arr != null && arr instanceof Array && arr.length > 0;
}

/**
 * Check value is instance of Array
 * @param v the value
 * @returns {boolean}
 */
function forInstance(v) {
    return v instanceof Array;
}

function valueOf(v) {
    if (!forInstance(v)) return null;
    return {
        equals: equals.bind(v),
        virtualGet: virtualGet.bind(v),
        insert: insert.bind(v),
        lastIndexOf: lastIndexOf.bind(v),
        isEmpty: isEmpty.bind(v),
        isNotEmpty: isNotEmpty.bind(v)
    };
}

module.exports = {
    type: {
        empty,
        isBlank,
        isNotBlank,
        forInstance,
        valueOf
    },
    extend() {
        Array.empty = empty;
        Array.isBlank = isBlank;
        Array.isNotBlank = isNotBlank;
        Array.forInstance = forInstance;

        Array.prototype.equals = equals;
        Array.prototype.virtualGet = virtualGet;
        Array.prototype.insert = insert;
        Array.prototype.lastIndexOf = lastIndexOf;
        Array.prototype.isEmpty = isEmpty;
        Array.prototype.isNotEmpty = isNotEmpty;
    }
};
