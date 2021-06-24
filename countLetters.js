const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// FUNCTION: take in a sentence (as a string) and then return a count of each of the letters in that sentence
const countLetters = function(sentence) {
  const spacesOut = sentence.split(" ").join(""); // get rid of spaces and join into one
  let result = {}; // creates empty object to store results
  for (let i = 0; i < spacesOut.length; i++) { //iterate through sentence
    if (result[spacesOut[i]]) {
      result[spacesOut[i]] += 1; //increment 1 per letter count in sentence
    } else {
      result[spacesOut[i]] = 1; //start with 1 per letter
    }
  }
  console.log(result); //prints out result as new object
  return result;
};
// TEST CODE: check letter count for this sentence
countLetters("lighthouse in the house");