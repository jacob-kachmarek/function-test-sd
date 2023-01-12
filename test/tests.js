// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'hello!!!';

    const actual = addExclamationPoints('hello');

    expect.deepEqual(actual, expected, 'hello = hello!!!');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.deepEqual(actual, expected);
});
