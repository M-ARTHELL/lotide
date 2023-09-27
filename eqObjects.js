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


//TESTING
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false