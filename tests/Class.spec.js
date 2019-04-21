const {ClassType, OverridingError} = require('#index');
const ClassTest = require('./data/class');

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

test('isES6Class function', () => {
    expect(ClassType.isES6Class(ClassTest.A)).toBeTruthy();
    expect(ClassType.isES6Class(ClassTest.B)).toBeTruthy();
    expect(ClassType.isES6Class(ClassTest.C)).toBeTruthy();
    expect(ClassType.isES6Class(ClassTest.D)).toBeTruthy();
    expect(ClassType.isES6Class(ClassTest.E)).toBeTruthy();
});

test('preventOverrideClass function', () => {
    expect(ClassType.preventOverrideClass(new ClassTest.A(), ClassTest.A, [ClassTest.B, ClassTest.C])).toBeFalsy();
    expect(ClassType.preventOverrideClass(new ClassTest.C(), ClassTest.B, [ClassTest.E, ClassTest.F])).toBeFalsy();
    expect(ClassType.preventOverrideClass(new ClassTest.D(), ClassTest.B, [ClassTest.E, ClassTest.F])).toBeFalsy();
    expect(ClassType.preventOverrideClass(new ClassTest.B(), ClassTest.A, [ClassTest.B, ClassTest.C])).toBeTruthy();
    expect(ClassType.preventOverrideClass(new ClassTest.C(), ClassTest.A, [ClassTest.B, ClassTest.C])).toBeTruthy();
    expect(ClassType.preventOverrideClass(new ClassTest.E(), ClassTest.A, [ClassTest.B, ClassTest.C])).toBeTruthy();
    expect(ClassType.preventOverrideClass(new ClassTest.F(), ClassTest.A, [ClassTest.B, ClassTest.C])).toBeTruthy();
    expect(() => ClassType.preventOverrideClass(new ClassTest.D(), ClassTest.A, [ClassTest.B, ClassTest.C])).toThrow(OverridingError);
});

test('dynamicPreventOverrideFunction function', () => {
    expect(ClassType.preventOverrideFunction(new ClassTest.A(), ClassTest.A, ['a', 'b', 'c'])).toBeFalsy();
    expect(ClassType.preventOverrideFunction(new ClassTest.D(), ClassTest.B, ['a', 'b', 'c'])).toBeFalsy();
    expect(ClassType.preventOverrideFunction(new ClassTest.B(), ClassTest.C, ['a', 'b', 'c'])).toBeFalsy();
    expect(ClassType.preventOverrideFunction(new ClassTest.B(), ClassTest.A, ['b', 'c'])).toBeTruthy();
    expect(ClassType.preventOverrideFunction(new ClassTest.C(), ClassTest.A, ['c'])).toBeTruthy();
    expect(ClassType.preventOverrideFunction(new ClassTest.D(), ClassTest.A, ['b'])).toBeTruthy();
    expect(ClassType.preventOverrideFunction(new ClassTest.F(), ClassTest.E, ['b'])).toBeTruthy();
    expect(() => ClassType.preventOverrideFunction(new ClassTest.B(), ClassTest.A, ['a', 'b', 'c'])).toThrow(OverridingError);
    expect(() => ClassType.preventOverrideFunction(new ClassTest.C(), ClassTest.A, ['a', 'b', 'c'])).toThrow(OverridingError);
    expect(() => ClassType.preventOverrideFunction(new ClassTest.F(), ClassTest.A, ['a', 'b'])).toThrow(OverridingError);
});

test('subclassOf function', () => {
    expect(ClassType.valueOf(ClassTest.A).subclassOf(ClassTest.A)).toBeFalsy();
    expect(ClassType.valueOf(ClassTest.C).subclassOf(ClassTest.B)).toBeFalsy();
    expect(ClassType.valueOf(ClassTest.D).subclassOf(ClassTest.B)).toBeFalsy();
    expect(ClassType.valueOf(ClassTest.B).subclassOf(ClassTest.A)).toBeTruthy();
    expect(ClassType.valueOf(ClassTest.C).subclassOf(ClassTest.A)).toBeTruthy();
    expect(ClassType.valueOf(ClassTest.D).subclassOf(ClassTest.A)).toBeTruthy();
    expect(ClassType.valueOf(ClassTest.E).subclassOf(ClassTest.A)).toBeTruthy();
    expect(ClassType.valueOf(ClassTest.F).subclassOf(ClassTest.A)).toBeTruthy();
});

test('valueOf.defineClass function', () => {
    expect(ClassType.valueOf(function() {}).defineClass(5, {})).toBeUndefined();
    expect(ClassType.valueOf(function A() {}).defineClass('A')).toHaveProperty('name', 'A');
    expect(ClassType.valueOf(function() {}).defineClass('B', class A {})).toHaveProperty('name', 'B');
    expect(ClassType.valueOf(function() {}).defineClass('C')).toHaveProperty('name', 'C');
    expect(ClassType.valueOf(function() {}).defineClass('D')).toBeInstanceOf(Function);
});
