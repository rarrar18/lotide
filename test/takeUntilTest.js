const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const output1 = [ 1, 2, 5, 7, 2 ];
console.log(results1); // Output: [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const output2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
console.log(results2); // Output: [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// MORE TEST CODE: Check if expected output matches what is passed into takeUntil()
assertArraysEqual(output1, results1);
assertArraysEqual(output2, results2);