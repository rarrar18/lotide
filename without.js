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
const assertArraysEqual = function(actual, expected) {
  // first compare the lengths of each array
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 False`);
    return false;
  } else { // then compare every element of each array
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑 False`);
        return false;
      }
    } // return true if each element matches, meaning same array
    console.log(`✅✅✅ True`);
    return true;
  }
};
// TEST CODE for assertArraysEqual()
// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// TEST CODE for assertEqual() and assertArraysEqual()
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => should PASS

// FUNCTION IMPLEMENTATION: Return a subset of a given array, removing unwanted elements
const without = function(source, itemsToRemove) {
  let toInclude = true; // assigns included elements a true
  let newArray = []; // empty array stores resulting values
  for (let element of source) {
    toInclude = true;
    // elements from second array are checked against elements of first array, if matching they are excluded from newArray
    for (let target of itemsToRemove) {
      if (element === target) {
        toInclude = false;
      }
    }
    if (toInclude) {
      // puts included (non-matching) elements into newArray
      newArray.push(element);
    }
  }
  // check if result of newArray has taken away unwanted element
  console.log(newArray);
  return newArray;
};

// TEST CODE for without()
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);