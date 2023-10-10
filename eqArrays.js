//assertEquals
const assertEqual = require('./assertEqual');

//eqArrays
const eqArrays = function(arr1, arr2) {
  let outcome = false;
  //Checks if array lengths are equal, returns false if not.
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      //If array elements don't match, returns false. Otherwise, returns true.
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        outcome = true;
      }
    }
  } else {
    return outcome;
  }
  return outcome;
};

module.exports = eqArrays;