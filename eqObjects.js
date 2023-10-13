const _ = require('./index');
const eqArrays = require('./eqArrays');


// eqObjects
// takes in two objects and compares them
const eqObjects = function(object1, object2) {
  // creates array of keys for each object to use as reference
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  let outcome = false;

  // compares the length of key arrays, continues accordingly
  if (objKeys1.length === objKeys2.length) {
    // passes keys to eqArrays for comparison and sets outcome as result
    if (eqArrays(objKeys1.sort(), objKeys2.sort()) == true) {
      // looping through the key array to access via keys in the objects
      for (let key of objKeys1) {
        // checking for arrays
        if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {

          // if array is found, passes to eqArrays and sets the outcome accordingly
          if(eqArrays(object1[key].sort(), object2[key].sort())) {
            outcome = true;
          } else {
            return outcome;
          }
        } else {
          // if non-array, compares them normally and sets the outcome accordingly
          if(object1[key] === object2[key]){
            outcome = true;
          } else {
            return outcome;
          }
        }
      }
    }
  }
  return outcome;
};

module.exports = eqObjects;