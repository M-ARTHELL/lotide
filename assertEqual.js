const _ = require('./index');


// assertEqual
// put in two primitives and compares them, then console.logs the result
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);

  } else {
    return console.log("🛑🛑🛑 Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};

module.exports = assertEqual;