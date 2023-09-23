//assertEqual copy
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//head
const head = function(array) {
  //Returns first element in array.
  return array[0];
};

//Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head([2]), 2);
assertEqual(head([ ]), "something");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");