const _ = require('./index');


// assertObjectsEqual
// takes in two objects and compares them, console.logs the result
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  // passes to eqObjects and returns a pass or fail depending on its conclusion
  if (_.eqObjects(actual, expected) === true) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;