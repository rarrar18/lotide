const findKeyByValue = require('../findKeyByValue.js');
const assertEqual = require('../assertEqual.js')

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // Should output drama
console.log(findValByKey(bestTVShowsByGenre, "sciFi")); // Should output The Expanse
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Should output Assertion Passed
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // Should output Assertion Passed