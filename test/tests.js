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

    expect.deepEqual(actual2, expected2, 'howdy = howdy!!!');

    const expected3 = 'Hey there!!!';

    const actual3 = addExclamationPoints('Hey there');

    expect.deepEqual(actual3, expected3, 'Hey there = Hey there!!!');
});

test('multiplyBySeven', (expect) => {
    const expected = 21;

    const actual = multiplyBySeven('3');

    expect.deepEqual(actual, expected, '3 = 21');

    const expected2 = 28;

    const actual2 = multiplyBySeven('4');

    expect.deepEqual(actual2, expected2, '4 = 28');

    const expected3 = 35;

    const actual3 = multiplyBySeven('5');

    expect.deepEqual(actual3, expected3, '5 = 35');
});

test('multiplyBy12ThenHalve', (expect) => {
    const expected = 18;

    const actual = multiplyBy12ThenHalve(3);

    expect.deepEqual(actual, expected, '3 = 36');

    const expected2 = 24;

    const actual2 = multiplyBy12ThenHalve(4);

    expect.deepEqual(actual2, expected2, '4 = 48');

    const expected3 = 30;

    const actual3 = multiplyBy12ThenHalve(5);

    expect.deepEqual(actual3, expected3, '5 = 60');
});

test('divideThenMultiply', (expect) => {
    const expected = 18;

    const actual = divideThenMultiply('12', '2', '3');

    expect.deepEqual(actual, expected, '18 = 12, 2, 3');

    const expected2 = 21;

    const actual2 = divideThenMultiply('14', '2', '3');

    expect.deepEqual(actual2, expected2, '21 = 14, 2, 3');

    const expected3 = 24;

    const actual3 = divideThenMultiply('16', '2', '3');

    expect.deepEqual(actual3, expected3, '24 = 16, 2, 3');
});

test('returnAsAnArray', (expect) => {
    const expected = [1, 2, 3];

    const actual = returnAsAnArray(1, 2, 3);

    expect.deepEqual(actual, expected, '123 = [1, 2, 3]');

    const expected2 = [2, 3, 4];

    const actual2 = returnAsAnArray(2, 3, 4);

    expect.deepEqual(actual2, expected2, '234 = [2, 3, 4]');

    const expected3 = [4, 5, 6];

    const actual3 = returnAsAnArray(4, 5, 6);

    expect.deepEqual(actual3, expected3, '456 = [4, 5, 6]');
});

test('returnAsAString', (expect) => {
    const expected = '123';

    const actual = returnAsAString('1', '2', '3');

    expect.deepEqual(actual, expected, '123 = 1, 2, 3');

    const expected2 = '345';

    const actual2 = returnAsAString('3', '4', '5');

    expect.deepEqual(actual2, expected2, '345 = 3, 4, 5');

    const expected3 = '456';

    const actual3 = returnAsAString('4', '5', '6');

    expect.deepEqual(actual3, expected3, '456 = 4, 5, 6');
});

test('makeLuckyGreeting', (expect) => {
    const expected = 'hello! your lucky number for the day is 6';

    const actual = makeLuckyGreeting(3, 3);

    expect.deepEqual(actual, expected, 'hello! your lucky number for the day is 6 = (1 + 2 + 3)');

    const expected2 = 'hello! your lucky number for the day is 8';

    const actual2 = makeLuckyGreeting(2 + 4);

    expect.deepEqual(actual2, expected2, 'hello! your lucky number for the day is 8 = (2 + 2 + 4)');

    const expected3 = 'hello! your lucky number for the day is 10';

    const actual3 = makeLuckyGreeting(4 + 4 + 2);

    expect.deepEqual(
        actual3,
        expected3,
        'hello! your lucky number for the day is 10 = (4 + 4 + 2)'
    );
});

test('getSecondItem', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected, 'apple');

    const expected2 = 'grape';

    const actual2 = getSecondItem(['kiwi', 'grape', 'orange', 'plum']);

    expect.deepEqual(actual2, expected2, 'grape');

    const expected3 = 'papaya';

    const actual3 = getSecondItem(['kiwi', 'papaya', 'orange', 'plum']);

    expect.deepEqual(actual3, expected3, 'papaya');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.deepEqual(actual, expected);
});
