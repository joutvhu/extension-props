const {FunctionType} = require('#index');
const classTest = require('./data/class');
const funcTest = require('./data/function');

test('forInstance function', () => {
    expect(FunctionType.forInstance({})).toBeFalsy();
    expect(FunctionType.forInstance(function () {
    })).toBeTruthy();
    expect(FunctionType.forInstance(function a() {
    })).toBeTruthy();
});

test('defineFunction function', () => {
    expect(FunctionType.defineFunction('A')).toBeInstanceOf(Function);
    expect(FunctionType.defineFunction('B', function () {
    })).toHaveProperty('name', 'B');
    expect(FunctionType.defineFunction('C', function a() {
    })).toHaveProperty('name', 'C');
    expect(FunctionType.defineFunction('D', function b() {
    })).toBeInstanceOf(Function);
});

test('clone function', () => {
    expect(FunctionType.valueOf(null)).toBeUndefined();
    expect(FunctionType.valueOf(function () {
    }).clone()).toBeInstanceOf(Function);
    expect(FunctionType.valueOf(function a() {
    }).clone()).toBeInstanceOf(Function);
    expect(FunctionType.valueOf(function b() {
    }).clone()).toBeInstanceOf(Function);
});

test('valueOf.defineFunction function', () => {
    expect(FunctionType.valueOf(function () {
    }).defineFunction('A')).toHaveProperty('name', 'A');
    expect(FunctionType.valueOf(function a() {
    }).defineFunction('B')).toHaveProperty('name', 'B');
    expect(FunctionType.valueOf(function b() {
    }).defineFunction('C')).toBeInstanceOf(Function);
});

test('isNormalFunction function', () => {
    expect(FunctionType.isNormalFunction(funcTest.as0)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as1)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as2)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as3)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as4)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as5)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as6)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as7)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as8)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as9)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as10)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as11)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as12)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.as13)).toBeFalsy();

    expect(FunctionType.isNormalFunction(funcTest.sy0)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy1)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy2)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy3)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy4)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy5)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy6)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy7)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy8)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy9)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy10)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy11)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy12)).toBeTruthy();
    expect(FunctionType.isNormalFunction(funcTest.sy13)).toBeTruthy();

    expect(FunctionType.isNormalFunction(funcTest.ar0)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar1)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar2)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar3)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar4)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar5)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar6)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar7)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar8)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar9)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar10)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar11)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar12)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ar13)).toBeFalsy();

    expect(FunctionType.isNormalFunction(funcTest.sr0)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr1)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr2)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr3)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr4)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr5)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr6)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr7)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr8)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr9)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr10)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr11)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr12)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sr13)).toBeFalsy();

    expect(FunctionType.isNormalFunction(funcTest.ca0)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca1)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca2)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca3)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca4)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca5)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca6)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca7)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca8)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca9)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca10)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca11)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca12)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.ca13)).toBeFalsy();

    expect(FunctionType.isNormalFunction(funcTest.sc0)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc1)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc2)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc3)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc4)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc5)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc6)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc7)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc8)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc9)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc10)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc11)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc12)).toBeFalsy();
    expect(FunctionType.isNormalFunction(funcTest.sc13)).toBeFalsy();

    expect(FunctionType.isNormalFunction(classTest.A)).toBeFalsy();
    expect(FunctionType.isNormalFunction(classTest.B)).toBeFalsy();
    expect(FunctionType.isNormalFunction(classTest.E)).toBeFalsy();
    expect(FunctionType.isNormalFunction(classTest.F)).toBeFalsy();
});

test('isAsyncFunction function', () => {
    expect(FunctionType.isAsyncFunction(funcTest.as0)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as1)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as2)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as3)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as4)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as5)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as6)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as7)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as8)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as9)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as10)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as11)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as12)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.as13)).toBeTruthy();

    expect(FunctionType.isAsyncFunction(funcTest.sy0)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy1)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy2)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy3)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy4)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy5)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy6)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy7)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy8)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy9)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy10)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy11)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy12)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sy13)).toBeFalsy();

    expect(FunctionType.isAsyncFunction(funcTest.ar0)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar1)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar2)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar3)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar4)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar5)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar6)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar7)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar8)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar9)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar10)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar11)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar12)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.ar13)).toBeTruthy();

    expect(FunctionType.isAsyncFunction(funcTest.sr0)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr1)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr2)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr3)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr4)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr5)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr6)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr7)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr8)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr9)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr10)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr11)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr12)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.sr13)).toBeFalsy();

    expect(FunctionType.isAsyncFunction(funcTest.ca0)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca1)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca2)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca3)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca4)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca5)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca6)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca7)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca8)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca9)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca10)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca11)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca12)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(funcTest.ca13)).toBeFalsy();

    expect(FunctionType.isAsyncFunction(funcTest.sc0)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc1)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc2)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc3)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc4)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc5)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc6)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc7)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc8)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc9)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc10)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc11)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc12)).toBeTruthy();
    expect(FunctionType.isAsyncFunction(funcTest.sc13)).toBeTruthy();

    expect(FunctionType.isAsyncFunction(classTest.A)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(classTest.B)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(classTest.E)).toBeFalsy();
    expect(FunctionType.isAsyncFunction(classTest.F)).toBeFalsy();
});

test('isSyncFunction function', () => {
    expect(FunctionType.isSyncFunction(funcTest.as0)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as1)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as2)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as3)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as4)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as5)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as6)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as7)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as8)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as9)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as10)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as11)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as12)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.as13)).toBeFalsy();

    expect(FunctionType.isSyncFunction(funcTest.sy0)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy1)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy2)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy3)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy4)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy5)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy6)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy7)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy8)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy9)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy10)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy11)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy12)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sy13)).toBeTruthy();

    expect(FunctionType.isSyncFunction(funcTest.ar0)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar1)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar2)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar3)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar4)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar5)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar6)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar7)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar8)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar9)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar10)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar11)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar12)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.ar13)).toBeFalsy();

    expect(FunctionType.isSyncFunction(funcTest.sr0)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr1)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr2)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr3)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr4)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr5)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr6)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr7)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr8)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr9)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr10)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr11)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr12)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.sr13)).toBeTruthy();

    expect(FunctionType.isSyncFunction(funcTest.ca0)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca1)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca2)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca3)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca4)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca5)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca6)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca7)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca8)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca9)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca10)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca11)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca12)).toBeTruthy();
    expect(FunctionType.isSyncFunction(funcTest.ca13)).toBeTruthy();

    expect(FunctionType.isSyncFunction(funcTest.sc0)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc1)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc2)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc3)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc4)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc5)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc6)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc7)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc8)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc9)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc10)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc11)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc12)).toBeFalsy();
    expect(FunctionType.isSyncFunction(funcTest.sc13)).toBeFalsy();

    expect(FunctionType.isSyncFunction(classTest.A)).toBeFalsy();
    expect(FunctionType.isSyncFunction(classTest.B)).toBeFalsy();
    expect(FunctionType.isSyncFunction(classTest.E)).toBeFalsy();
    expect(FunctionType.isSyncFunction(classTest.F)).toBeFalsy();
});

test('isArrowFunction function', () => {
    expect(FunctionType.isArrowFunction(funcTest.as0)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as1)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as2)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as3)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as4)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as5)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as6)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as7)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as8)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as9)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as10)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as11)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as12)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.as13)).toBeFalsy();

    expect(FunctionType.isArrowFunction(funcTest.sy0)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy1)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy2)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy3)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy4)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy5)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy6)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy7)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy8)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy9)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy10)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy11)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy12)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sy13)).toBeFalsy();

    expect(FunctionType.isArrowFunction(funcTest.ar0)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar1)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar2)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar3)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar4)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar5)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar6)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar7)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar8)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar9)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar10)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar11)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar12)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.ar13)).toBeTruthy();

    expect(FunctionType.isArrowFunction(funcTest.sr0)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr1)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr2)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr3)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr4)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr5)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr6)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr7)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr8)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr9)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr10)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr11)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr12)).toBeTruthy();
    expect(FunctionType.isArrowFunction(funcTest.sr13)).toBeTruthy();

    expect(FunctionType.isArrowFunction(funcTest.ca0)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca1)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca2)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca3)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca4)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca5)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca6)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca7)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca8)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca9)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca10)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca11)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca12)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.ca13)).toBeFalsy();

    expect(FunctionType.isArrowFunction(funcTest.sc0)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc1)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc2)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc3)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc4)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc5)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc6)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc7)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc8)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc9)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc10)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc11)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc12)).toBeFalsy();
    expect(FunctionType.isArrowFunction(funcTest.sc13)).toBeFalsy();

    expect(FunctionType.isArrowFunction(classTest.A)).toBeFalsy();
    expect(FunctionType.isArrowFunction(classTest.B)).toBeFalsy();
    expect(FunctionType.isArrowFunction(classTest.E)).toBeFalsy();
    expect(FunctionType.isArrowFunction(classTest.F)).toBeFalsy();
});

test('isNonArrowFunction function', () => {
    expect(FunctionType.isNonArrowFunction(funcTest.as0)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as1)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as2)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as3)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as4)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as5)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as6)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as7)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as8)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as9)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as10)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as11)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as12)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.as13)).toBeTruthy();

    expect(FunctionType.isNonArrowFunction(funcTest.sy0)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy1)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy2)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy3)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy4)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy5)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy6)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy7)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy8)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy9)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy10)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy11)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy12)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sy13)).toBeTruthy();

    expect(FunctionType.isNonArrowFunction(funcTest.ar0)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar1)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar2)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar3)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar4)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar5)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar6)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar7)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar8)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar9)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar10)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar11)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar12)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.ar13)).toBeFalsy();

    expect(FunctionType.isNonArrowFunction(funcTest.sr0)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr1)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr2)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr3)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr4)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr5)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr6)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr7)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr8)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr9)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr10)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr11)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr12)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(funcTest.sr13)).toBeFalsy();

    expect(FunctionType.isNonArrowFunction(funcTest.ca0)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca1)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca2)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca3)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca4)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca5)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca6)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca7)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca8)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca9)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca10)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca11)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca12)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.ca13)).toBeTruthy();

    expect(FunctionType.isNonArrowFunction(funcTest.sc0)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc1)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc2)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc3)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc4)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc5)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc6)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc7)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc8)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc9)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc10)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc11)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc12)).toBeTruthy();
    expect(FunctionType.isNonArrowFunction(funcTest.sc13)).toBeTruthy();

    expect(FunctionType.isNonArrowFunction(classTest.A)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(classTest.B)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(classTest.E)).toBeFalsy();
    expect(FunctionType.isNonArrowFunction(classTest.F)).toBeFalsy();
});

test('isCallable function', () => {
    expect(FunctionType.isCallable(funcTest.as0)).toBeTruthy();
    expect(FunctionType.isCallable(funcTest.sy0)).toBeTruthy();
    expect(FunctionType.isCallable(funcTest.ar0)).toBeTruthy();
    expect(FunctionType.isCallable(funcTest.sr0)).toBeTruthy();
    expect(FunctionType.isCallable(funcTest.ca0)).toBeTruthy();
    expect(FunctionType.isCallable(funcTest.sc0)).toBeTruthy();
    expect(FunctionType.isCallable(classTest.A)).toBeFalsy();
    expect(FunctionType.isCallable(classTest.B)).toBeFalsy();
    expect(FunctionType.isCallable(classTest.E)).toBeFalsy();
    expect(FunctionType.isCallable(classTest.F)).toBeFalsy();
});
