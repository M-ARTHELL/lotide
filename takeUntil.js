//eqArrays
const eqArrays = function(arr1, arr2) {
  let outcome = false;
  if (arr1.length === arr2.length) {
    if (arr1.length === 0) {
      outcome = true;
    }
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


//takeUntil
const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
};


//TESTING
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])

console.log('---');

const data3 = [0, 3, 2, 7, 5]
const results3 = takeUntil(data3, x => x === 0);
assertArraysEqual(results3, []);