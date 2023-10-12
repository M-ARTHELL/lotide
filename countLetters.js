const _ = require('./index');

 // countLetters
 // takes a string (string) and counts the letters within it, skipping spaces
const countLetters = function(string) {
  const totals = {};

  // loop through letters in string
  for (letter of string) {
    if (totals[letter]) {
      // adds +1 to an existing instance. if no instance exists, creates it and sets it to 1
      totals[letter]++;
    } else {
      totals[letter] = 1;
    }
  }
  // removes space (" ") count from totals object
  delete totals[" "]
  // return object containing letter count
  return totals;
};

module.exports = countLetters;