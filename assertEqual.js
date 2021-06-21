//This custom assert function logs a message to the console
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //comparing non-identical strings
assertEqual("apple", "apple"); //comparing identical strings
assertEqual(50, 100); //comparing non-identical numbers
assertEqual(1, 1); //comparing identical numbers
assertEqual(true, false); //comparing non-identical values