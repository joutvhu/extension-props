class A {
    a() {}
    b() {}
    c() {}
}
class B extends A {
    a() {}
    d() {}
}
class C extends A {
    a() {}
    b() {}
    get e() {}
}
class D extends A {
    a() {}
    c() {}
    get f() {}
    set f(v) {}
}
class E extends B {
    b() {}
    get f() {}
    set f(v) {}
}
class F extends E {
    c() {}
    g() {}
}

module.exports = {
    A, B, C, D, E, F
}
