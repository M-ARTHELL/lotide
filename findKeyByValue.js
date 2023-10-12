const _ = require('./index');


// findKeyByValue
// takes an object (obj) and the contents of a key (content) to find and return said key
const findKeyByValue = function(obj, content) {
  // creates an array of the input object's keys for reference
  let keys = Object.keys(obj);
  for (let key of keys) {
    // comparing each key's contents to the contents of the desired key and returns said key when a match is found
    if (content === obj[key]) {
      return key;
    }
  }
  // returns undefined if no match
  return undefined;
}

module.exports = findKeyByValue;