//assertArraysEqual copy
const assertArraysEqual = require('./assertArraysEqual');

//eqArrays copy
const eqArrays = require('./assertArraysEqual');

//middle
const middle = function(array) {
  let arrayMiddle = [];
  //Returns empty array if it's too short.
  if (array.length === 1 || array.length === 2) {
    return arrayMiddle;
    //Push two middle elements for even arrays.
  } else if (array.length % 2 === 0) {
    arrayMiddle.push(array[(array.length / 2) - 1]);
    arrayMiddle.push(array[array.length / 2]);
  } else {
    //Push middle elements for other arrays
    arrayMiddle.push(array[Math.floor(array.length / 2)]);
  }
  //Print middle arrays to console.
  return arrayMiddle;
};

module.exports = middle;