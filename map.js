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
    return outcome;
  }
  return outcome;
};

//assertArraysEqual
const assertArraysEqual = function(actual, expected) {
  const fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  if(eqArrays(actual, expected) === true) {
    return console.log(pass)
  } else {
    return console.log(fail)
  }
};


//map
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word), ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(map(words, word => word.split('').reverse().join('')), ["dnuorg", "lortnoc", "ot", "rojam", "mot"]);