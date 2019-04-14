const {RegularType} = require('#index');

test('forInstance function', () => {
    expect(RegularType.forInstance(null)).toBeFalsy();
    expect(RegularType.forInstance('')).toBeFalsy();
    expect(RegularType.forInstance('/g+/i')).toBeFalsy();
    expect(RegularType.forInstance(/g+/i)).toBeTruthy();
    expect(RegularType.forInstance(new RegExp('g+', 'i'))).toBeTruthy();
});

test('escape function', () => {
    expect(RegularType.escape(null)).toEqual('');
    expect(RegularType.escape('/g+/i')).toEqual('\\/g\\+\\/i');
    expect(RegularType.escape('[g$AFRc.i')).toEqual('\\[g\\$AFRc\\.i');
    expect(RegularType.escape('[-/\\^$*+?.()|{}]')).toEqual('\\[\\-\\/\\\\\\^\\$\\*\\+\\?\\.\\(\\)\\|\\{\\}\\]');
});

test('matchWords function', () => {
    expect(RegularType.matchWords(null)).toEqual('');
    expect(RegularType.matchWords('ab bc   Cd ')).toEqual('(ab)|(bc)|(Cd)');
    expect(RegularType.matchWords('   ')).toEqual('');
    expect(RegularType.matchWords(' abc+c  ef.kl')).toEqual('(abc\\+c)|(ef\\.kl)');
});
