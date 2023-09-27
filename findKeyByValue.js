//assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
  } else {
    return console.log("🛑🛑🛑 Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};



//findKeyByValue
const findKeyByValue = function(obj, content) {
  //finds object "obj" and creates an array of its keys
  let keys = Object.keys(obj);
  //checking each key in array of keys
  for (let key of keys) {
    //compare with desired contents of obj and returns key when matched
    if (content === obj[key]) {
      return key;
    }
  }
  //returns undefined if no match
  return undefined;
}



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);