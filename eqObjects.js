// FUNCTION: Check equality of two values
const assertEqual = function(actual, expected) {
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION: Check equality of two arrays
const eqArrays = function(actual, expected) {
  // first compare the lengths of each array
  if (actual.length !== expected.length) {
    // console.log(`🛑🛑🛑 False`);
    return false;
  } else { // then compare every element of each array
    for (let i = 0; i < actual.length; i++) {
      // console.log("actual[i]:", actual[i]);
      // console.log("expected[i]:", expected[i]);
      if (actual[i] !== expected[i]) {
        // console.log(`🛑🛑🛑 False`);
        return false;
      }
    }
    // console.log(`✅✅✅ True`);
    return true;
  }
};

// FUNCTION: Takes in two objects and returns true or false, based on a perfect match of keys and values
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // Returns array of the object 1's keys
  const keys2 = Object.keys(object2); // Returns array of the object 2's keys

  // compare lengths of two keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // iterate through array of keys
  for (const key of keys1) {
    const key1 = object1[key]; // returns each element of keys1
    const key2 = object2[key]; // returns each element of keys2
    if (Array.isArray(key1)) {
      if (!eqArrays(key1, key2)) { // if elements do not match
        return false;
      }
      continue;
    }

    // if the above condition is false
    if (key1 !== key2) {
      return false;
    }
  }

  // if it passes the tests above, it must be true
  return true;
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false
assertEqual(cd, dc); // => true
assertEqual(cd, cd2); // => false