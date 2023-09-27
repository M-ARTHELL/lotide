//assertArraysEqual
const assertArraysEqual = function(actual, expected) {
  const fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return console.log(fail);
      } else {
        return console.log(pass);
      }
    }
  } else {
    return console.log(fail);
  }
};

//letterPositions
const letterPositions = function(string) {
  //create blank object template
  const results = {};
  //look through letters of string
  for (let i = 0; i < string.length; i++) {
    //if there's a space, do nothing
    if (string[i] === ' ') {
      //nothing
    //if letter doesn't exist, add it
    } else if (results.hasOwnProperty(string[i]) == false) {
      results[string[i]] = [i];
    //if letter exists, push index to the correct array in object
    } else {
      results[string[i]].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [4]);