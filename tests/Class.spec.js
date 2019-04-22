const {ClassType, OverridingError} = require('#index');
const classTest = require('./data/class');
const funcTest = require('./data/function');

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
    expect(ClassType.isES6Class(classTest.A)).toBeTruthy();
    expect(ClassType.isES6Class(classTest.B)).toBeTruthy();
    expect(ClassType.isES6Class(classTest.C)).toBeTruthy();
    expect(ClassType.isES6Class(classTest.D)).toBeTruthy();
    expect(ClassType.isES6Class(classTest.E)).toBeTruthy();

    expect(ClassType.isES6Class(funcTest.as0)).toBeFalsy();
    expect(ClassType.isES6Class(funcTest.sy0)).toBeFalsy();
    expect(ClassType.isES6Class(funcTest.ar0)).toBeFalsy();
    expect(ClassType.isES6Class(funcTest.sr0)).toBeFalsy();
    expect(ClassType.isES6Class(funcTest.ca0)).toBeFalsy();
    expect(ClassType.isES6Class(funcTest.sc0)).toBeFalsy();
});

test('preventOverrideClass function', () => {
    expect(ClassType.preventOverrideClass(new classTest.A(), classTest.A, [classTest.B, classTest.C])).toBeFalsy();
    expect(ClassType.preventOverrideClass(new classTest.C(), classTest.B, [classTest.E, classTest.F])).toBeFalsy();
    expect(ClassType.preventOverrideClass(new classTest.D(), classTest.B, [classTest.E, classTest.F])).toBeFalsy();
    expect(ClassType.preventOverrideClass(new classTest.B(), classTest.A, [classTest.B, classTest.C])).toBeTruthy();
    expect(ClassType.preventOverrideClass(new classTest.C(), classTest.A, [classTest.B, classTest.C])).toBeTruthy();
    expect(ClassType.preventOverrideClass(new classTest.E(), classTest.A, [classTest.B, classTest.C])).toBeTruthy();
    expect(ClassType.preventOverrideClass(new classTest.F(), classTest.A, [classTest.B, classTest.C])).toBeTruthy();
    expect(() => ClassType.preventOverrideClass(new classTest.D(), classTest.A, [classTest.B, classTest.C])).toThrow(OverridingError);
});

test('dynamicPreventOverrideFunction function', () => {
    expect(ClassType.preventOverrideFunction(new classTest.A(), classTest.A, ['a', 'b', 'c'])).toBeFalsy();
    expect(ClassType.preventOverrideFunction(new classTest.D(), classTest.B, ['a', 'b', 'c'])).toBeFalsy();
    expect(ClassType.preventOverrideFunction(new classTest.B(), classTest.C, ['a', 'b', 'c'])).toBeFalsy();
    expect(ClassType.preventOverrideFunction(new classTest.B(), classTest.A, ['b', 'c'])).toBeTruthy();
    expect(ClassType.preventOverrideFunction(new classTest.C(), classTest.A, ['c'])).toBeTruthy();
    expect(ClassType.preventOverrideFunction(new classTest.D(), classTest.A, ['b'])).toBeTruthy();
    expect(ClassType.preventOverrideFunction(new classTest.F(), classTest.E, ['b'])).toBeTruthy();
    expect(ClassType.preventOverrideFunction(new classTest.E(), classTest.A, ['c'])).toBeTruthy();
    expect(() => ClassType.preventOverrideFunction(new classTest.B(), classTest.A, ['a', 'b', 'c'])).toThrow(OverridingError);
    expect(() => ClassType.preventOverrideFunction(new classTest.C(), classTest.A, ['a', 'b', 'c'])).toThrow(OverridingError);
    expect(() => ClassType.preventOverrideFunction(new classTest.F(), classTest.A, ['a', 'b'])).toThrow(OverridingError);
});

test('subclassOf function', () => {
    expect(ClassType.valueOf(classTest.A).subclassOf(classTest.A)).toBeFalsy();
    expect(ClassType.valueOf(classTest.C).subclassOf(classTest.B)).toBeFalsy();
    expect(ClassType.valueOf(classTest.D).subclassOf(classTest.B)).toBeFalsy();
    expect(ClassType.valueOf(classTest.B).subclassOf(classTest.A)).toBeTruthy();
    expect(ClassType.valueOf(classTest.C).subclassOf(classTest.A)).toBeTruthy();
    expect(ClassType.valueOf(classTest.D).subclassOf(classTest.A)).toBeTruthy();
    expect(ClassType.valueOf(classTest.E).subclassOf(classTest.A)).toBeTruthy();
    expect(ClassType.valueOf(classTest.F).subclassOf(classTest.A)).toBeTruthy();
});

test('valueOf.defineClass function', () => {
    expect(ClassType.valueOf(function() {}).defineClass(5, {})).toBeUndefined();
    expect(ClassType.valueOf(function A() {}).defineClass('A')).toHaveProperty('name', 'A');
    expect(ClassType.valueOf(function() {}).defineClass('B', class A {})).toHaveProperty('name', 'B');
    expect(ClassType.valueOf(function() {}).defineClass('C')).toHaveProperty('name', 'C');
    expect(ClassType.valueOf(function() {}).defineClass('D')).toBeInstanceOf(Function);
});
