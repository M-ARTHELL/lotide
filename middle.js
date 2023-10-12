const _ = require('./index');

// middle
// takes in an array and returns the middlemost element
const middle = function(array) {
  let arrayMiddle = [];

  // returns empty array if the input array is too short
  if (array.length <= 2) {
    return arrayMiddle;

    // pushes the two middle elements for even arrays
  } else if (array.length % 2 === 0) {
    arrayMiddle.push(array[(array.length / 2) - 1]);
    arrayMiddle.push(array[array.length / 2]);

  } else {
    // pushes the one middle element for odd arrays
    arrayMiddle.push(array[Math.floor(array.length / 2)]);
  }
  return arrayMiddle;
};

module.exports = middle;