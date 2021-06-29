// FUNCTION: Take in two arrays and return true or false based on a perfect match
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
// should require eqArrays function?

module.exports = assertArraysEqual;