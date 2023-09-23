const assertArraysEqual = function(actual, expected) {
  const fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return console.log(fail);
      } else {
        return console.log(pass);
      }
    }
  } else {
    return console.log(fail);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);