const _ = require('./index');


// findKey
// takes an object and a callback, then returns a key that contains the specifications of the callback
const findKey = function(obj, callback) {

  // keys are listed in an array for reference
  const keys = Object.keys(obj);
  let notFound = undefined

  // compares the callback to each key, returns it if a match is found
  for (let key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }
  // returns 'undefined' if no match
  return notFound;
};

module.exports = findKey;