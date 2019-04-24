const {RegexType} = require('#index');

test('forInstance function', () => {
    expect(RegexType.forInstance(null)).toBeFalsy();
    expect(RegexType.forInstance('')).toBeFalsy();
    expect(RegexType.forInstance('/g+/i')).toBeFalsy();
    expect(RegexType.forInstance(/g+/i)).toBeTruthy();
    expect(RegexType.forInstance(new RegExp('g+', 'i'))).toBeTruthy();
});

test('escape function', () => {
    expect(RegexType.escape(null)).toEqual('');
    expect(RegexType.escape('/g+/i')).toEqual('\\/g\\+\\/i');
    expect(RegexType.escape('[g$AFRc.i')).toEqual('\\[g\\$AFRc\\.i');
    expect(RegexType.escape('[-/\\^$*+?.()|{}]')).toEqual('\\[\\-\\/\\\\\\^\\$\\*\\+\\?\\.\\(\\)\\|\\{\\}\\]');
});

test('matchWords function', () => {
    expect(RegexType.matchWords(null)).toEqual('');
    expect(RegexType.matchWords('ab bc   Cd ')).toEqual('(ab)|(bc)|(Cd)');
    expect(RegexType.matchWords('   ')).toEqual('');
    expect(RegexType.matchWords(' abc+c  ef.kl')).toEqual('(abc\\+c)|(ef\\.kl)');
});
