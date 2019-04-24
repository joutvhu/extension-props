require('#index').extend();

test('forInstance function', () => {
    expect(RegExp.forInstance(null)).toBeFalsy();
    expect(RegExp.forInstance('')).toBeFalsy();
    expect(RegExp.forInstance('/g+/i')).toBeFalsy();
    expect(RegExp.forInstance(/g+/i)).toBeTruthy();
    expect(RegExp.forInstance(new RegExp('g+', 'i'))).toBeTruthy();
});

test('escape function', () => {
    expect(RegExp.escape(null)).toEqual('');
    expect(RegExp.escape('/g+/i')).toEqual('\\/g\\+\\/i');
    expect(RegExp.escape('[g$AFRc.i')).toEqual('\\[g\\$AFRc\\.i');
    expect(RegExp.escape('[-/\\^$*+?.()|{}]')).toEqual('\\[\\-\\/\\\\\\^\\$\\*\\+\\?\\.\\(\\)\\|\\{\\}\\]');
});

test('matchWords function', () => {
    expect(RegExp.matchWords(null)).toEqual('');
    expect(RegExp.matchWords('ab bc   Cd ')).toEqual('(ab)|(bc)|(Cd)');
    expect(RegExp.matchWords('   ')).toEqual('');
    expect(RegExp.matchWords(' abc+c  ef.kl')).toEqual('(abc\\+c)|(ef\\.kl)');
});
