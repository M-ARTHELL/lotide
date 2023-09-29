//eqArrays
const eqArrays = function(arr1, arr2) {
  let outcome = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        outcome = true;
      }
    }
  } else {
    return false;
  }
  return outcome;
};


//eqObjects
const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  let outcome = null;

  if (objKeys1.length === objKeys2.length) {
    //passes to eqArrays and sets outcome as result
    if (eqArrays(objKeys1.sort(), objKeys2.sort()) == true) {
      for (let key of objKeys1) {
        //compares for arrays
        if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          //runs through eqArrays and sets outcome acordingly
          if(eqArrays(object1[key].sort(), object2[key].sort())) {
            outcome = true;
          } else {
            outcome = false;
            return false;
          }
        } else {
          //if non-array, compares and sets outcome accordingly
          if(object1[key] === object2[key]){
            outcome = true;
          } else {
            outcome = false
            return outcome;
          }
        }
      }
    }
  } else {
    //sets outcome to false if lengths are not equal
    outcome = false;
  }
  return outcome;
};

//assertObjectsEqual
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TESTING
assertObjectsEqual({a: '1', b: '2'}, {a: '1', b: "2"}); //pass
assertObjectsEqual({a: '1', b: '2'}, {a: '1', b: "5"}); //fail
assertObjectsEqual({a: 'one', b: '2'}, {a: 'one', b: "2"}); //pass
assertObjectsEqual({a: '1', b: 'five'}, {a: 'one', b: "5"}); // fail