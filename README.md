# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @m-arthell/lotide`

**Require it:**

`const _ = require('@m-arthell/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Takes two arrays and compares them. Gives back a console.log of the result.
* `assertEqual(actual, expected)`: takes in two values and compares them. Gives back a console.log of the result.
* `assertObjectsEqual(actual, expected)`: Takes two objects and compares them. Gives back a console.log of the result.
* `countLetters(string)`: Counts the amount of letters in a given string.
* `countOnly(allItems, itemsToCount)`: Takes an array of strings, and an object specifying what to count. Returns the amount of times the specified items show up in the array.
* `eqArrays(arr1, arr2)`: Takes in two arrays and returns true or false depending on whether they're equal or not.
* `eqObjects(object1, object2)`: Takes in two objects and returns true or false depending on whether they're equal or not.
* `findKey(obj, callback)`: Takes in an object and a callback that checks for something within said object, and returns the key if found.
* `findKeyByValue(obj, content)`: Takes in an object and the content of a key, then returns the key that contains said content.
* `flatten(array)`: Takes in an array containing arrays and return it as a single array.
* `head(array)`: Takes in an array and returns the first element in it.
* `letterPositions(string)`: Takes in a string and returns an object that lists the letters and their positions.
* `map(array, callback)`: Takes in an array and a callback then returns an array based on the callback's specification.
* `middle(array)`: Takes in an array and returns the middle most element/s.
* `tail(array)`: Takes in an array and returns everything beyond the first element.
* `takeUntil(array, callback)`: Takes in an array and callback that specifies a point to cut off. Returns an array that includes elements up until the element specified by the callback.
* `without(array, toRemove)`: Takes in array and an array of elements to be removed from the first array. Returns a copy of the first array that excludes the elements specified in the second array.