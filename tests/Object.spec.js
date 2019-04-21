const {ObjectType} = require('#index');
const ClassTest = require('./data/class');

test('isBlank function', () => {
    expect(ObjectType.isBlank(undefined)).toBeTruthy();
    expect(ObjectType.isBlank(null)).toBeTruthy();
    expect(ObjectType.isBlank({})).toBeFalsy();
    expect(ObjectType.isBlank('')).toBeFalsy();
    expect(ObjectType.isBlank([])).toBeFalsy();
    expect(ObjectType.isNotBlank(new ClassTest.F())).toBeTruthy();
});

test('isNotBlank function', () => {
    expect(ObjectType.isNotBlank(undefined)).toBeFalsy();
    expect(ObjectType.isNotBlank(null)).toBeFalsy();
    expect(ObjectType.isNotBlank({})).toBeTruthy();
    expect(ObjectType.isNotBlank('')).toBeTruthy();
    expect(ObjectType.isNotBlank([])).toBeTruthy();
    expect(ObjectType.isNotBlank(new ClassTest.F())).toBeTruthy();
});

test('getAllPropertyNames function', () => {
    expect(ObjectType.getAllPropertyNames({})).toEqual([]);
    expect(ObjectType.getAllPropertyNames({a: 0, b: 1})).toHaveLength(2);
    expect(ObjectType.getAllPropertyNames(new ClassTest.A())).toContain('constructor');
    expect(ObjectType.getAllPropertyNames(new ClassTest.A())).toContain('a');
    expect(ObjectType.getAllPropertyNames(new ClassTest.F())).toHaveLength(7);
});

test('getAllPropertyDescriptors function', () => {
    expect(ObjectType.getAllPropertyDescriptors({})).toEqual({});
    expect(ObjectType.getAllPropertyDescriptors({a: 0, b: 1})).toMatchObject({a: {}, b: {}});
    expect(ObjectType.getAllPropertyDescriptors(new ClassTest.A())).toHaveProperty('constructor');
    expect(ObjectType.getAllPropertyDescriptors(new ClassTest.A())).toHaveProperty('a');
    expect(ObjectType.getAllPropertyDescriptors(new ClassTest.F())).toMatchObject(
        {constructor: {}, a: {}, b: {}, c: {}, d: {}, f: {}, g: {}});
    expect(ObjectType.getAllPropertyDescriptors(new ClassTest.F())).toHaveProperty('f.get');
});

test('getAllPropertyDescriptor function', () => {
    expect(ObjectType.getAllPropertyDescriptor({}, 'a')).toBeUndefined();
    expect(ObjectType.getAllPropertyDescriptor({a: 0, b: 1}, 'a')).toMatchObject({
        configurable: true,
        enumerable: true,
        value: 0
    });
    expect(ObjectType.getAllPropertyDescriptor(new ClassTest.A(), 'a')).toHaveProperty('value');
    expect(ObjectType.getAllPropertyDescriptor(new ClassTest.A(), 'b')).toHaveProperty('value');
    expect(ObjectType.getAllPropertyDescriptor(new ClassTest.F(), 'f')).toHaveProperty('get');
    expect(ObjectType.getAllPropertyDescriptor(new ClassTest.F(), 'g')).toHaveProperty('value');
});
