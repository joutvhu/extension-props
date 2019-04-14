const {ArrayType} = require('#index');

test('valueOf function', () => {
    expect(ArrayType.valueOf(null)).not.toBeNull();
    expect(ArrayType.valueOf({a:0})).not.toBeNull();
    expect(ArrayType.valueOf('[0,1]')).not.toBeNull();
    expect(ArrayType.valueOf([0,1])).not.toBeNull();
    expect(ArrayType.valueOf(new Array(0, 1))).not.toBeNull();
});

test('forInstance function', () => {
    expect(ArrayType.forInstance(null)).toBeFalsy();
    expect(ArrayType.forInstance({a: 0})).toBeFalsy();
    expect(ArrayType.forInstance('[0, 1]')).toBeFalsy();
    expect(ArrayType.forInstance([])).toBeTruthy();
    expect(ArrayType.forInstance(new Array())).toBeTruthy();
});

test('isBlank function', () => {
    expect(ArrayType.isBlank(null)).toBeTruthy();
    expect(ArrayType.isBlank([])).toBeTruthy();
    expect(ArrayType.isBlank([0])).toBeFalsy();
});

test('isNotBlank function', () => {
    expect(ArrayType.isNotBlank(null)).toBeFalsy();
    expect(ArrayType.isNotBlank([])).toBeFalsy();
    expect(ArrayType.isNotBlank([0])).toBeTruthy();
});

test('equals function', () => {
    expect(ArrayType.valueOf([]).equals(null)).toBeFalsy();
    expect(ArrayType.valueOf([0]).equals('[0]')).toBeFalsy();
    expect(ArrayType.valueOf([]).equals([])).toBeTruthy();
    expect(ArrayType.valueOf([0]).equals([0])).toBeTruthy();
    expect(ArrayType.valueOf([0,'a']).equals([0,'a'])).toBeTruthy();
});

test('virtualGet function', () => {
    expect(ArrayType.valueOf([]).virtualGet(null)).toBeUndefined();
    expect(ArrayType.valueOf(['a', 'b', 'c']).virtualGet('s')).toBeUndefined();
    expect(ArrayType.valueOf(['a', 'b', 'c']).virtualGet(1)).toBe('b');
    expect(ArrayType.valueOf(['a', 'b', 'c']).virtualGet(5)).toBe('c');
    expect(ArrayType.valueOf(['a', 'b', 'c']).virtualGet(-3)).toBe('a');
});

test('insert function', () => {
    expect(ArrayType.valueOf([]).insert(0, null)).toContain(null);
    expect(ArrayType.valueOf(['a', 'b', 'c']).insert(0, 's')).toContain('s');
    expect(ArrayType.valueOf(['a', 'b', 'c']).insert(1, 5)).toHaveLength(4);
    expect(ArrayType.valueOf(['a', 'b', 'c']).insert(0, 6)[0]).toEqual(6);
    expect(ArrayType.valueOf(['a', 'b', 'c']).insert(2, -3)[2]).toEqual(-3);
});

test('lastIndexOf function', () => {
    expect(ArrayType.valueOf([]).lastIndexOf(0)).toBe(-1);
    expect(ArrayType.valueOf(['a', 'b', 'c']).lastIndexOf('d')).toBe(-1);
    expect(ArrayType.valueOf(['a', 'b', 'c']).lastIndexOf('a')).toBe(0);
    expect(ArrayType.valueOf(['a', 'b', 'c']).lastIndexOf('b')).toBe(1);
    expect(ArrayType.valueOf(['a', 'b', 'c']).lastIndexOf('c')).toBe(2);
});

test('lastIndexOf function', () => {
    expect(ArrayType.valueOf([]).isEmpty()).toBeTruthy();
    expect(ArrayType.valueOf(['a', 'b', 'c']).isEmpty()).toBeFalsy();
});

test('lastIndexOf function', () => {
    expect(ArrayType.valueOf([]).isNotEmpty()).toBeFalsy();
    expect(ArrayType.valueOf(['a', 'b', 'c']).isNotEmpty()).toBeTruthy();
});
