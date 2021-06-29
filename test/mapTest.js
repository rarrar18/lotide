const map = require('../map.js');
const assertArraysEqual = require('../assertArraysEqual.js')

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1); // Outputs: [ 'g', 'c', 't', 'm', 't' ]
const results2 = map(words, word => word.length);
console.log(results2); // Outputs: [ 6, 7, 2, 5, 3 ]
const results3 = map(words, word => word);
console.log(results3); // Outputs: ["ground", "control", "to", "major", "tom"]

// MORE TEST CODE
assertArraysEqual(words, results3);