const _ = require('./index');


// letterPositions
// takes in a string and returns an object where each letter is a key and their contents is an array of their indicies
const letterPositions = function(string) {
  const results = {};

  for (let i = 0; i < string.length; i++) {
    //if there's a space, do nothing
    if (string[i] === ' ') {
      //(nothing)

    //if there's no intstance of the current letter as a key, add it to the object with the current index in an array
    } else if (results[string[i]] == undefined) {
      results[string[i]] = [i];

    //if the current letter exists already, push the index to its array
    } else {
      results[string[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;