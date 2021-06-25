// FUNCTION: Returns a slice of the array with elements taken from the beginning
const takeUntil = function(array, callback) {
  // Loop through the elements of the array
  let results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  // return array.filter(callback);
};

// The callback should pass in one value: the item in the array


// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const output1 = [ 1, 2, 5, 7, 2 ];
console.log(results1); // Output: [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const output2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
console.log(results2); // Output: [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// FUNCTION IMPLEMENTATION: Takes in two arrays and returns true or false, based on a perfect match
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

// MORE TEST CODE: Check if expected output matches what is passed into takeUntil()
assertArraysEqual(output1, results1);
assertArraysEqual(output2, results2);