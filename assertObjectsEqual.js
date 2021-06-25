const eqArrays = function(actual, expected) {
  // first compare the lengths of each array
  if (actual.length !== expected.length) {
    return false;
  } else { // then compare every element of each array
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};

// FUNCTION: Takes in two objects and returns true or false, based on a perfect match of keys and values
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //compare lengths of two keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // iterate through array of keys
  for (const key of keys1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      continue;
    }

    // if the above condition is false
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  // if it passes the tests above, it must be true
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // imports the util library
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc); // => true
assertObjectsEqual(cd, cd2); // => false