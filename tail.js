const _ = require('./index');

// returns all array elements that come after the first
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;