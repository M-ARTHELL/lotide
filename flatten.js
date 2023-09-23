const flatten = function(array) {
  let tempArray = [];
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      tempArray = array[i];
      for (let ii = 0; ii < tempArray.length; ii++) {
        newArray.push(tempArray[ii]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return console.log(newArray);
};

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
