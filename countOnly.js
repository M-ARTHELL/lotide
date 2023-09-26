//assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
  } else {
    return console.log("🛑🛑🛑 Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};

//countOnly
//allItems: array of strings to look through
//itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  
}