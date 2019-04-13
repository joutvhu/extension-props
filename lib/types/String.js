const empty = '';
const space = ' ';

/**
 * Compare equals with the specified string.
 *
 * @param s the specified string.
 * @returns {boolean} true, if two string is equally.
 */
function equals(s) {
    return s && this == s;
}

function equalsIgnoreCase(s) {
    if (typeof s !== 'string') return false;
    return this.toLowerCase() == s.toLowerCase();
}

/**
 * Check string is empty
 *
 * @returns {boolean}
 */
function isEmpty() {
    return this === empty;
}

/**
 * Check string is not empty
 *
 * @returns {boolean}
 */
function isNotEmpty() {
    return this !== empty;
}

/**
 * Check string is blank
 *
 * @returns {boolean}
 */
function isBlank(v) {
    return v == null || typeof v !== 'string' || v === empty;
}

/**
 * Check string is not blank
 *
 * @returns {boolean}
 */
function isNotBlank(v) {
    return v != null && typeof v === 'string' && v !== empty;
}

function forInstance(v) {
    return v != null && typeof v === 'string';
}

function valueOf(v) {
    if (!forInstance(v)) return null;
    return {
        equals: equals.bind(v),
        equalsIgnoreCase: equalsIgnoreCase.bind(v),
        isEmpty: isEmpty.bind(v),
        isNotEmpty: isNotEmpty.bind(v)
    };
}

module.exports = {
    type: {
        empty,
        space,
        isBlank,
        isNotBlank,
        forInstance,
        valueOf
    },
    extend() {
        String.empty = empty;
        String.space = space;
        String.isBlank = isBlank;
        String.isNotBlank = isNotBlank;
        String.forInstance = forInstance;

        String.prototype.equals = equals;
        String.prototype.equalsIgnoreCase = equalsIgnoreCase;
        String.prototype.isEmpty = isEmpty;
        String.prototype.isNotEmpty = isNotEmpty;
    }
};
