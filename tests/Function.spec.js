const {FunctionType} = require('#index');

test('forInstance function', () => {
    expect(FunctionType.forInstance({})).toBeFalsy();
    expect(FunctionType.forInstance(function() {})).toBeTruthy();
    expect(FunctionType.forInstance(function a() {})).toBeTruthy();
});

test('defineFunction function', () => {
    expect(FunctionType.defineFunction('A')).toBeInstanceOf(Function);
    expect(FunctionType.defineFunction('B', function() {})).toHaveProperty('name', 'B');
    expect(FunctionType.defineFunction('C', function a() {})).toHaveProperty('name', 'C');
    expect(FunctionType.defineFunction('D', function b() {})).toBeInstanceOf(Function);
});

test('clone function', () => {
    expect(FunctionType.valueOf(null)).toBeUndefined();
    expect(FunctionType.valueOf(function() {}).clone()).toBeInstanceOf(Function);
    expect(FunctionType.valueOf(function a() {}).clone()).toBeInstanceOf(Function);
    expect(FunctionType.valueOf(function b() {}).clone()).toBeInstanceOf(Function);
});

test('valueOf.defineFunction function', () => {
    expect(FunctionType.valueOf(function() {}).defineFunction('A')).toHaveProperty('name', 'A');
    expect(FunctionType.valueOf(function a() {}).defineFunction('B')).toHaveProperty('name', 'B');
    expect(FunctionType.valueOf(function b() {}).defineFunction('C')).toBeInstanceOf(Function);
});

test('valueOf.defineClass function', () => {
    expect(FunctionType.valueOf(function() {}).defineClass('A')).toHaveProperty('name', 'A');
    expect(FunctionType.valueOf(function a() {}).defineClass('B', class A {})).toHaveProperty('name', 'B');
    expect(FunctionType.valueOf(function b() {}).defineClass('C')).toBeInstanceOf(Function);
});

