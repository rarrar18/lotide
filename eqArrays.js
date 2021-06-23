// FUNCTION IMPLEMENTATION: Takes in two values and compares using strict equality operator
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE for assertEqual()
// assertEqual("Lighthouse Labs", "Bootcamp"); //comparing non-identical strings
// assertEqual("apple", "apple"); //comparing identical strings
// assertEqual(50, 100); //comparing non-identical numbers
// assertEqual(1, 1); //comparing identical numbers
// assertEqual(true, false); //comparing non-identical values

// FUNCTION IMPLEMENTATION: Takes in two arrays and returns true or false, based on a perfect match
const eqArrays = function(actual, expected) {
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
// TEST CODE for eqArrays()
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// TEST CODE for both functions
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS