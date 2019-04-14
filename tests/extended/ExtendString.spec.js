require('#index').extend();

test('forInstance function', () => {
    expect(String.forInstance(null)).toBeFalsy();
    expect(String.forInstance('')).toBeTruthy();
    expect(String.forInstance(' ')).toBeTruthy();
    expect(String.forInstance({a: 0})).toBeFalsy();
    expect(String.forInstance([0, 1])).toBeFalsy();
});

test('isBlank function', () => {
    expect(String.isBlank(null)).toBeTruthy();
    expect(String.isBlank('')).toBeTruthy();
    expect(String.isBlank(' ')).toBeFalsy();
});

test('isNotBlank function', () => {
    expect(String.isNotBlank(null)).toBeFalsy();
    expect(String.isNotBlank('')).toBeFalsy();
    expect(String.isNotBlank(' ')).toBeTruthy();
});

test('equals function', () => {
    expect(''.equals(null)).toBeFalsy();
    expect(''.equals(' ')).toBeFalsy();
    expect(''.equals('')).toBeTruthy();
    expect('null'.equals('null')).toBeTruthy();
    expect('Null'.equals('null')).toBeFalsy();
});

test('isEmpty function', () => {
    expect(''.isEmpty()).toBeTruthy();
    expect('null'.isEmpty()).toBeFalsy();
});

test('isNotEmpty function', () => {
    expect(''.isNotEmpty()).toBeFalsy();
    expect('null'.isNotEmpty()).toBeTruthy();
});

test('equalsIgnoreCase function', () => {
    expect(''.equalsIgnoreCase(null)).toBeFalsy();
    expect('A'.equalsIgnoreCase('a')).toBeTruthy();
    expect('B'.equalsIgnoreCase('B')).toBeTruthy();
    expect('null'.equalsIgnoreCase('Null')).toBeTruthy();
});
