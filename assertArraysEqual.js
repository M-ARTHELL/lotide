const assertArraysEqual = function(actual, expected) {
  const fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  //Checks if lengths of actual and expected are equal, returns fail if not.
  if (actual.length === expected.length) {
    //Looks through actual and compared with expected.
    for (let i = 0; i < actual.length; i++) {
      // If index in actual is different from expected, returns fail.
      if (actual[i] !== expected[i]) {
        return console.log(fail);
        //If everything in actual matches expected, returns pass.
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