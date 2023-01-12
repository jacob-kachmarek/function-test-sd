// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    makeLuckyGreeting,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
    returnAsAnArray,
    returnAsAString,
    getSecondItem,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints', (expect) => {
    const expected = 'hello!!!';

    const actual = addExclamationPoints('hello');

    expect.deepEqual(actual, expected, 'hello = hello!!!');

    const expected2 = 'howdy!!!';

    const actual2 = addExclamationPoints('howdy');

    expect.deepEqual(actual, expected, 'howdy = howdy!!!');

    const expected3 = 'Hey there!!!';

    const actual3 = addExclamationPoints('Hey there');

    expect.deepEqual(actual, expected, 'Hey there = Hey there!!!');
});

test('multiplyBySeven', (expect) => {
    const expected = 21;

    const actual = multiplyBySeven('3');

    expect.deepEqual(actual, expected, '3 = 21');

    const expected2 = 28;

    const actual2 = multiplyBySeven('4');

    expect.deepEqual(actual, expected, '4 = 28');

    const expected3 = 35;

    const actual3 = multiplyBySeven('5');

    expect.deepEqual(actual, expected, '5 = 35');
});

test('multiplyBy12ThenHalve', (expect) => {
    const expected = 18;

    const actual = multiplyBy12ThenHalve(3);

    expect.deepEqual(actual, expected, '3 = 36');
});

test('divideThenMultiply', (expect) => {
    const expected = [1, 2, 3];

    const actual = divideThenMultiply(123);

    expect.deepEqual(actual, expected, '123 = [1, 2, 3]');
});

test('returnAsAnArray', (expect) => {
    const expected = [1, 2, 3];

    const actual = returnAsAnArray(1, 2, 3);

    expect.deepEqual(actual, expected, '123 = [1, 2, 3]');
});

test('returnAsAString', (expect) => {
    const expected = 'hello! your lucky number for the day is 6';

    const actual = returnAsAString(1 + 2 + 3);

    expect.deepEqual(actual, expected, 'hello! your lucky number for the day is 6 = (1 + 2 + 3)');
});

test('makeLuckyGreeting', (expect) => {
    const expected = 'apple';

    const actual = makeLuckyGreeting(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'apple = [kiwi, apple, orange, plum]');
});

test('getSecondItem', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'apple');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.deepEqual(actual, expected);
});
