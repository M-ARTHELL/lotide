const _ = require('./index');


// without
// takes in an array and an array with unwanted elements, then returns a copy of the first array with the unwanted elements removed
const without = function(array, toRemove) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {

    //if current element is in 'toRemove', do nothing
    if (toRemove.includes(array[i])) {
      // (nothing)
    } else {
      // if element is not in 'toRemove', push it to the new array
      newArray.push(array[i]);
    }
  }
  // return newArray.
  return newArray;
};

module.exports = without;