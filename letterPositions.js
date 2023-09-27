const letterPositions = function(string) {
  //create blank object template
  const results = {};
  //look through letters of string
  for (let i = 0; i < string.length; i++) {
    //if there's a space, do nothing
    if (string[i] === ' ') {
      //nothing
    //if letter doesn't exist, add it
    } else if (results.hasOwnProperty(string[i]) == false) {
      results[string[i]] = [i];
    //if letter exists, push index to the correct array in object
    } else {
      results[string[i]].push(i);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));