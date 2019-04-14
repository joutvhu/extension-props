const {ClassType} = require('#index');

test('forInstance function', () => {
    expect(ClassType.forInstance({})).toBeFalsy();
    expect(ClassType.forInstance(function() {})).toBeTruthy();
    expect(ClassType.forInstance(function a() {})).toBeTruthy();
    expect(ClassType.forInstance(class A {})).toBeTruthy();
});

test('isClass function', () => {
    expect(ClassType.isClass({})).toBeFalsy();
    expect(ClassType.isClass(function() {})).toBeFalsy();
    expect(ClassType.isClass(function a() {})).toBeFalsy();
    expect(ClassType.isClass(class A {})).toBeTruthy();
});

test('defineClass function', () => {
    expect(ClassType.defineClass(5, {})).toBeUndefined();
    expect(ClassType.defineClass('A', null, function() {})).toHaveProperty('name', 'A');
    expect(ClassType.defineClass('B', class A {})).toHaveProperty('name', 'B');
    expect(ClassType.defineClass('C')).toHaveProperty('name', 'C');
    expect(ClassType.defineClass('D')).toBeInstanceOf(Function);
});

test('valueOf.defineClass function', () => {
    expect(ClassType.valueOf(function() {}).defineClass(5, {})).toBeUndefined();
    expect(ClassType.valueOf(function A() {}).defineClass('A')).toHaveProperty('name', 'A');
    expect(ClassType.valueOf(function() {}).defineClass('B', class A {})).toHaveProperty('name', 'B');
    expect(ClassType.valueOf(function() {}).defineClass('C')).toHaveProperty('name', 'C');
    expect(ClassType.valueOf(function() {}).defineClass('D')).toBeInstanceOf(Function);
});
