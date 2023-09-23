//assertArraysEqual copy
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

//eqArrays copy
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
};

//middle
const middle = function(array) {
  let arrayMiddle = [];
  //Returns empty array if it's too short.
  if (array.length === 1 || array.length === 2) {
    return console.log(arrayMiddle);
    //Push two middle elements for even arrays.
  } else if (array.length % 2 === 0) {
    arrayMiddle.push(array[(array.length / 2) - 1]);
    arrayMiddle.push(array[array.length / 2]);
  } else {
    //Push middle elements for other arrays
    arrayMiddle.push(array[Math.floor(array.length / 2)]);
  }
  //Print middle arrays to console.
  return console.log(arrayMiddle);
}

//test code
middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]