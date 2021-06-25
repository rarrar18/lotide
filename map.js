//The map function will return a new array based on the results of the callback function.
const map = function(arr, cb) {
  console.log('array: ', arr); // Output: [ 'ground', 'control', 'to', 'major', 'tom' ]
  console.log('callback: ', cb); // Output: [Function]
  const results = []; //empty array to hold results
  for (let item of arr) {
    results.push(cb(item)); // pushes the return value of the callback function
  }
  return results; 
};

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1); // Outputs: [ 'g', 'c', 't', 'm', 't' ]
const results2 = map(words, word => word.length);
console.log(results2); // Outputs: [ 6, 7, 2, 5, 3 ]
const results3 = map(words, word => word);
console.log(results3); // Outputs: ["ground", "control", "to", "major", "tom"]

// FUNCTION: Compare equality of two arrays
const assertArraysEqual = function(actual, expected) {
  // first compare the lengths of each array
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 False`);
    return false;
  } else { // then compare every element of each array
    for (let i = 0; i < actual.length; i++) {
      // console.log("actual[i]:", actual[i]);
      // console.log("expected[i]:", expected[i]);
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑 False`);
        return false;
      }
    }
    console.log(`✅✅✅ True`);
    return true;
  }
};

// MORE TEST CODE
assertArraysEqual(words, results3);