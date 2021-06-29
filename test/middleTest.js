// const assertArraysEqual = require('../assertArraysEqual.js')
const middle = require('../middle.js')

// For arrays with one or two elements, there is no middle. Return empty array.
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
// For arrays with odd number of elements, return array with single middle element.
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));// => [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]