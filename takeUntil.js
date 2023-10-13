const _ = require('./index');


// takeUntil
// takes in an array and a callback, then returns the array, cut off at the point specified by the callback
const takeUntil = function(array, callback) {

  // if the array is empty, returns the empty array
  if(array.length === 0) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    // if the current element satisfies the callback's specifications, the array is cut off there and returned
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
};

module.exports = takeUntil