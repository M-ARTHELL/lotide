const _ = require('./index');

// eqArrays
const eqArrays = function(arr1, arr2) {
  let outcome = false;

  // checks if array lengths are equal
  if (arr1.length === arr2.length) {

    // returns true if both arrays are empty, as it would return false otherwise
    if (arr1.length === 0 && arr2.length === 0) {
      outcome = true;
      return outcome;
    }

    for (let i = 0; i < arr1.length; i++) {
      // if array elements don't match, returns false. Otherwise, returns true.
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        outcome = true;
      }
    }
  }
  // returns false if lengths are not equal
  return outcome;
};

module.exports = eqArrays;