const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE for eqArrays()
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// TEST CODE for both functions
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS