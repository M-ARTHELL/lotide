//eqArrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
};

//assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
  } else {
    return console.log("🛑🛑🛑 Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};


//eqObjects
const eqObjects = function(object1, object2) {
  //make keys into an array
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  //set up return variable
  let outcome = null;
  //check length of each key array
  if (objKeys1.length === objKeys2.length) {
    for (let i = 0; i < objKeys1.length; i++) {
      //checks if objects are both arrays
      if (Array.isArray(objKeys1) === Array.isArray(objKeys2)) {
        //passes to eqArrays and sets outcome accordingly
        if (eqArrays(objKeys1.sort, objKeys2.sort) === true) {
          outcome = true;
          return outcome;
        } else {
          outcome = false;
          return outcome;
        }
      } else {
        //compares each key for a match
        if (objKeys1[i] === objKeys2[i]) {
        //outcome = true if matched
        outcome = true;
        } else {
          //if false: outcome = false, stop looping + return outcome
          outcome = false
          return outcome;
        }
      }
    }
    //outcome = false if lengths are different
  } else {
    outcome = false;
  }
  //return outcome
  return outcome;
};


//tests
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false