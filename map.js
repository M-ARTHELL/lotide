const _ = require('./index');


//map
//takes an array and a callback, runs the callback on each element of the array, adds it to a new array, then returns the new array
const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    // using the callback on each element and pushing it to a new array
    results.push(callback(item));
  }
  //returning the new array
  return results;
}

module.exports = map;