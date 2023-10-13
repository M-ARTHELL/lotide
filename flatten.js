const _ = require('./index');


// flatten
// takes in a nested array and returns a new array that includes the nested elements without the nesting
const flatten = function(array) {
  let tempArray = [];
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    // if the current element is an array, it is assigned to a temporary variable and looped to push its contents to a new array
    if (Array.isArray(array[i])) {
      tempArray = array[i];
      
      for (let ii = 0; ii < tempArray.length; ii++) {
        newArray.push(tempArray[ii]);
      }
      // if the current element is not an array, it pushes it to the new array
    } else {
      newArray.push(array[i]);
    }
  }
  // return the new array
  return newArray;
};


module.exports = flatten;