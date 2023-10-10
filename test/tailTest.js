const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TEST CASES
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result =  tail(words);
assertEqual(result.length, 2); //ensire we get back two elements
assertEqual(result[0], "Lighthouse"); //ensure first element is lighthouse
assertEqual(result[1], "Labs"); //ensure second element is labs
assertEqual(words.length, 3); // original array should still have 3 elements!

//FALSE CASES
assertEqual(result.length, 5);
assertEqual(result[0], "Labs");