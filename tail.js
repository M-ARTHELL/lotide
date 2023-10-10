//assertEqual
const assertEqual = require('./assertEqual');

//Returns array elements at index 1 onwards.
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;