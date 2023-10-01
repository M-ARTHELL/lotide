// assertEquals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
  } else {
    return console.log("🛑🛑🛑 Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};


//findKey
const findKey = function(obj, callback) {
  const keys = Object.keys(obj);
  let notFound = undefined
  for (let key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return notFound;
};

//test
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma")

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 23 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 12 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), undefined); // => "undefined"