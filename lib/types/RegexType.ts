import {escape, matchWords, regularForInstance} from '../utils/StringAndRegex';

function valueOf(v: RegExp) {
    if (!regularForInstance(v)) return null;
    return {};
}

export const type = {
    forInstance: regularForInstance,
    escape,
    matchWords,
    valueOf
};

export function extend() {
    RegExp.escape = escape;
    RegExp.matchWords = matchWords;
    RegExp.forInstance = regularForInstance;
}
