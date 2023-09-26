//assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
  } else {
    return console.log("🛑🛑🛑 Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};

//countOnly
//allItems: array of strings to look through
//itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  //checking contents of allItems
  for (const item of allItems) {
    //setting + counting instances in results
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    console.log(item);
  }
  return results;
};

//test
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);