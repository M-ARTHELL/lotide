const _ = require('./index');


// assertArraysEqual
// takes in two arrays and console.logs the result
const assertArraysEqual = function(actual, expected) {
  const fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  // passes contents to eqArrays, returns a pass or fail
  if (_.eqArrays(actual,expected) === true) {
    return console.log(pass);
  } else {
    return console.log(fail);
  }
};

/*
// tests
assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual([1, 2], [2, 1]);
*/

module.exports = assertArraysEqual;