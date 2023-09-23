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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
  } else {
    return console.log("🛑🛑🛑 Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};

const without = function(array, toRemove) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if(toRemove.includes(array[i])) {
      /* nothing*/
    } else {
    newArray.push(array[i])
    }
  }
  return console.log(newArray);
};

//Tests
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
without([1, 2, 3], [1]); // => [2, 3]
assertArraysEqual([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
assertArraysEqual(["1", "2", "3"], [1, 2, "3"]);