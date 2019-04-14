const {ObjectType} = require('#index');

test('getAllPropertyNames function', () => {
    expect(ObjectType.getAllPropertyNames({})).toEqual([]);
    expect(ObjectType.getAllPropertyNames({a: 0, b: 1})).toHaveLength(2);
    expect(ObjectType.getAllPropertyNames(new (class A {a() {}})())).toContain('constructor');
    expect(ObjectType.getAllPropertyNames(new (class A {a() {}})())).toContain('a');
});
