const {StringType} = require('#index');

test('valueOf function', () => {
    expect(StringType.valueOf(null)).not.toBeNull();
    expect(StringType.valueOf({a:0})).not.toBeNull();
    expect(StringType.valueOf([0,1])).not.toBeNull();
    expect(StringType.valueOf('')).not.toBeNull();
});

test('forInstance function', () => {
    expect(StringType.forInstance(null)).toBeFalsy();
    expect(StringType.forInstance({a: 0})).toBeFalsy();
    expect(StringType.forInstance([0, 1])).toBeFalsy();
    expect(StringType.forInstance('')).toBeTruthy();
    expect(StringType.forInstance(' ')).toBeTruthy();
});

test('empty property', () => {
    expect(StringType.empty).toBe('');
});

test('space property', () => {
    expect(StringType.space).toBe(' ');
});

test('isBlank function', () => {
    expect(StringType.isBlank(null)).toBeTruthy();
    expect(StringType.isBlank('')).toBeTruthy();
    expect(StringType.isBlank(' ')).toBeFalsy();
});

test('isNotBlank function', () => {
    expect(StringType.isNotBlank(null)).toBeFalsy();
    expect(StringType.isNotBlank('')).toBeFalsy();
    expect(StringType.isNotBlank(' ')).toBeTruthy();
});

test('equals function', () => {
    expect(StringType.valueOf('').equals(null)).toBeFalsy();
    expect(StringType.valueOf('').equals(' ')).toBeFalsy();
    expect(StringType.valueOf('').equals('')).toBeTruthy();
    expect(StringType.valueOf('null').equals('null')).toBeTruthy();
    expect(StringType.valueOf('Null').equals('null')).toBeFalsy();
});

test('isEmpty function', () => {
    expect(StringType.valueOf('').isEmpty()).toBeTruthy();
    expect(StringType.valueOf('null').isEmpty()).toBeFalsy();
});

test('isNotEmpty function', () => {
    expect(StringType.valueOf('').isNotEmpty()).toBeFalsy();
    expect(StringType.valueOf('null').isNotEmpty()).toBeTruthy();
});

test('equalsIgnoreCase function', () => {
    expect(StringType.valueOf('').equalsIgnoreCase(null)).toBeFalsy();
    expect(StringType.valueOf('A').equalsIgnoreCase('a')).toBeTruthy();
    expect(StringType.valueOf('B').equalsIgnoreCase('B')).toBeTruthy();
    expect(StringType.valueOf('null').equalsIgnoreCase('Null')).toBeTruthy();
});
