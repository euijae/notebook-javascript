const assert = require('assert');
const { When, Then } = require('@cucumber/cucumber');
const shuffleString = require('../coding-practice/leetcode/shuffleString');

let originalString;
let array;

When("the given string is {string}", function(value) {
    if(typeof value !== 'string') {
        assert.fail("The value should be type of string");
    }

    originalString = value;
});

When("the given array is {}", function(value) {
    array = value.split(",").map(item => parseInt(item));
});

Then("the result is {string}", function(expected) {
    let actual = shuffleString(originalString, array);
    assert.strictEqual(actual, expected, `Not matching. Actual = ${actual}, Expected = ${expected}.`);
});