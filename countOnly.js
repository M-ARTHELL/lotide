const _ = require('./index');

// countOnly
// allItems: array of strings to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  
  for (const item of allItems) {
    // compares current item to list of items
    if (itemsToCount[item]) {

      if (results[item]) {
        // adds +1 to an existing instance. if no instance exists, creates it and sets it to 1
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;