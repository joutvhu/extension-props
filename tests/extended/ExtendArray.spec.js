require('#index').extend();

test('forInstance function', () => {
    expect(Array.forInstance(null)).toBeFalsy();
    expect(Array.forInstance({a: 0})).toBeFalsy();
    expect(Array.forInstance('[0, 1]')).toBeFalsy();
    expect(Array.forInstance([])).toBeTruthy();
    expect(Array.forInstance(new Array())).toBeTruthy();
});

test('isBlank function', () => {
    expect(Array.isBlank(null)).toBeTruthy();
    expect(Array.isBlank([])).toBeTruthy();
    expect(Array.isBlank([0])).toBeFalsy();
});

test('isNotBlank function', () => {
    expect(Array.isNotBlank(null)).toBeFalsy();
    expect(Array.isNotBlank([])).toBeFalsy();
    expect(Array.isNotBlank([0])).toBeTruthy();
});

test('equals function', () => {
    expect([].equals(null)).toBeFalsy();
    expect([0].equals('[0]')).toBeFalsy();
    expect([].equals([])).toBeTruthy();
    expect([0].equals([0])).toBeTruthy();
    expect([0,'a'].equals([0,'a'])).toBeTruthy();
});

test('virtualGet function', () => {
    expect([].virtualGet(null)).toBeUndefined();
    expect(['a', 'b', 'c'].virtualGet('s')).toBeUndefined();
    expect(['a', 'b', 'c'].virtualGet(1)).toBe('b');
    expect(['a', 'b', 'c'].virtualGet(5)).toBe('c');
    expect(['a', 'b', 'c'].virtualGet(-3)).toBe('a');
});

test('insert function', () => {
    expect([].insert(0, null)).toContain(null);
    expect(['a', 'b', 'c'].insert(0, 's')).toContain('s');
    expect(['a', 'b', 'c'].insert(1, 5)).toHaveLength(4);
    expect(['a', 'b', 'c'].insert(0, 6)[0]).toEqual(6);
    expect(['a', 'b', 'c'].insert(2, -3)[2]).toEqual(-3);
});

test('lastIndexOf function', () => {
    expect([].lastIndexOf(0)).toBe(-1);
    expect(['a', 'b', 'c'].lastIndexOf('d')).toBe(-1);
    expect(['a', 'b', 'c'].lastIndexOf('a')).toBe(0);
    expect(['a', 'b', 'c'].lastIndexOf('b')).toBe(1);
    expect(['a', 'b', 'c'].lastIndexOf('c')).toBe(2);
});

test('lastIndexOf function', () => {
    expect([].isEmpty()).toBeTruthy();
    expect(['a', 'b', 'c'].isEmpty()).toBeFalsy();
});

test('lastIndexOf function', () => {
    expect([].isNotEmpty()).toBeFalsy();
    expect(['a', 'b', 'c'].isNotEmpty()).toBeTruthy();
});
