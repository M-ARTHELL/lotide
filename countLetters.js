//assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
  } else {
    return console.log("🛑🛑🛑 Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};

 //countLetters
const countLetters = function(string) {
  const totals = {};
  //loop through letters in string
  for (letter of string) {
    if (totals[letter]) {
      //add to existing instance of letters
      totals[letter]++;
    } else {
      //create new instance if nonexistent
      totals[letter] = 1;
    }
  }
  //return object of letter count
  return totals;
};