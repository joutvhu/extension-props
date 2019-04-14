const as0  = async function () {};
const as1  = async function f() {};
const as2  = async function f(a)
{};
const as3  = async function f(a, b) {};
const as4  = async function f(a = function () {}) {};
const as5  = async function f(a = function (a = () => {}) {}) {};
const as6  = async function f(a = () => {}) {};
const as7  = async function f(a = b => {}) {};
const as8  = async function f(a = c => c) {};
const as9  = async function f(a = c => {return c;}, b) {};
const as10 = async function f(a = () => 5) {};
const as11 = async function f(a = (
) => null) {};
const as12 = async function f(a, b = () => 8) {};
const as13 = async function f(a = (b = () => {}) => {}) {};

const sy0  = function() {};
const sy1  = function f() {};
const sy2  = function f(a) {};
const sy3  = function f(a, b) {};
const sy4  = function f(a = function () {}) {};
const sy5  = function f(a = function (a = () => {}) {}) {};
const sy6  = function f(a = () => {}) {};
const sy7  = function f(a =  b => {
}) {};
const sy8  = function f(a = c => c) {};
const sy9  = function f(a = c => {return c;}, b) {};
const sy10 = function f(a = () => 5) {};
const sy11 = function f(a
                            = () => null) {};
const sy12 = function f(a, b = () => 8) {};
const sy13 = function f(a = (b = () => {}) => {}) {};

const ar0  = async () => {};
const ar1  = async (a =
                        function () {}) => {};
const ar2  = async a => 2;
const ar3  = async (a,
                    b) => {};
const ar4  = async (a = function () {}) => {};
const ar5  = async (a = function (a = () => {}) {}) => {};
const ar6  = async (a = (
) => {}) => {};
const ar7  = async (a = b => {}) => {};
const ar8  = async (a = c => c) => {};
const ar9  = async (a = c => {return c;}, b) => {};
const ar10 = async (a = () => 5) => {};
const ar11 = async (a = () => null) => {};
const ar12 = async (a, b = () => 8) => {};
const ar13 = async (a = (b = () => {}) => {}) => {};

const sr0  =  () => {};
const sr1  =  () => 8;
const sr2  =  a => {};
const sr3  =  (a, b) => 5;
const sr4  =  (a = function () {}) => {};
const sr5  =  (a = function (a = () => {}) {}) => {};
const sr6  =  (a = function () {}) => {};
const sr7  =  a => function () {
};
const sr8  =  (a = function (a) {}) => {};
const sr9  =  (a = c => {return c;}, b) => {};
const sr10 =  (f = (async function(){})) => {};
const sr11 =  (a =
                   () => null) => {};
const sr12 =  (a, b = () => 8) => {};
const sr13 =  (a = (b = () => {}) => {}) => {};

class A {
    ca0() { return () => {};}
    ca1() {}
    ca2(a) {}
    ca3(a, b) {}
    ca4(a = function () {}) {}
    ca5(a = function (a = () => {}) {}) {}
    ca6(a = () => {}) {}
    ca7(a = b => {}) {}
    ca8(a = c => c) {
    }
    ca9(a = c => {
        return c;
        }, b) {}
    ca10(a = () => 5) {}
    ca11(a = () => null) {}
    ca12(a, b = () => 8) {}
    ca13(a = (b = () => {}) => {}) {}
    async sc0() { return () => {};}
    async sc1() {}
    async sc2(a) {}
    async sc3(a, b) {}
    async sc4(a = function () {}) {}
    async sc5(a = function (a = () => {}) {}) {}
    async sc6(a = () => {}) {}
    async sc7(a = b => {
    }) {}
    async sc8(a = c => c) {}
    async sc9(a = c => {return c;}, b) {}
    async sc10(a = () => 5) {}
    async sc11(a = () => null) {}
    async sc12(a, b = () => 8) {}
    async sc13(a = (b = () => {}) => {}) {}
}

module.exports = {
    as0,
    as1,
    as2,
    as3,
    as4,
    as5,
    as6,
    as7,
    as8,
    as9,
    as10,
    as11,
    as12,
    as13,

    sy0,
    sy1,
    sy2,
    sy3,
    sy4,
    sy5,
    sy6,
    sy7,
    sy8,
    sy9,
    sy10,
    sy11,
    sy12,
    sy13,

    ar0,
    ar1,
    ar2,
    ar3,
    ar4,
    ar5,
    ar6,
    ar7,
    ar8,
    ar9,
    ar10,
    ar11,
    ar12,
    ar13,

    sr0,
    sr1,
    sr2,
    sr3,
    sr4,
    sr5,
    sr6,
    sr7,
    sr8,
    sr9,
    sr10,
    sr11,
    sr12,
    sr13,

    ca0: A.prototype.ca0,
    ca1: A.prototype.ca1,
    ca2: A.prototype.ca2,
    ca3: A.prototype.ca3,
    ca4: A.prototype.ca4,
    ca5: A.prototype.ca5,
    ca6: A.prototype.ca6,
    ca7: A.prototype.ca7,
    ca8: A.prototype.ca8,
    ca9: A.prototype.ca9,
    ca10: A.prototype.ca10,
    ca11: A.prototype.ca11,
    ca12: A.prototype.ca12,
    ca13: A.prototype.ca13,

    sc0:  A.prototype.sc0,
    sc1:  A.prototype.sc1,
    sc2:  A.prototype.sc2,
    sc3:  A.prototype.sc3,
    sc4:  A.prototype.sc4,
    sc5:  A.prototype.sc5,
    sc6:  A.prototype.sc6,
    sc7:  A.prototype.sc7,
    sc8:  A.prototype.sc8,
    sc9:  A.prototype.sc9,
    sc10: A.prototype.sc10,
    sc11: A.prototype.sc11,
    sc12: A.prototype.sc12,
    sc13: A.prototype.sc13
};
