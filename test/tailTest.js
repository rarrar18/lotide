const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// More Test Cases: Single-element and empty arrays
const single = [1];
tail(single);
const empty = [];
tail(empty);
assertEqual(single.length, empty);