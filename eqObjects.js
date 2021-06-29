const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;