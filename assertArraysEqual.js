//eqArrays
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  if (eqArrays(actual,expected) === true) {
    return console.log(pass);
  } else {
    return console.log(fail);
  }
};

module.exports = assertArraysEqual;