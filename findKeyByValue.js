// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// FUNCTION: Search for a key on an object where its value matches a given value
const findKeyByValue = function(obj, val) {
  for (let key in obj) { //iterate through all keys in the object
    if (obj[key] === val) { // check if the value matches its key
      // let key = Object.keys(obj);
      return key; // output the matching key
    }
  }
};
const findValByKey = function(obj, key) {
  return obj[key]; //finds the value
  // return obj["sciFi"];
};

// TEST CODE
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // Should output drama
console.log(findValByKey(bestTVShowsByGenre, "sciFi")); // Should output The Expanse
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Should output Assertion Passed
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // Should output Assertion Passed

module.exports = findKeyByValue;