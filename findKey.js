// FUNCTION: Takes in object and a callback, scans the object for first key with cb as truthy
const findKey = function(obj, cb) {
  // iterate through the keys in the object
  for (let key in obj) {
    // for an anon func, make sure you pass in the parameter as well
    // (in this case obj[key] checks for the value of stars, which is a number)
    if (cb(obj[key])) {
      // return the first key where the cb returns a truthy value
      return key;
    }
  }
  // if no key is found, return undefined
  return undefined;
};

// TEST CODE
const test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(test); // Prints out the returned value

// FUNCTION: This is the defined version of x => x.stars === 2
// const cb = (x) => {
//   // check if this is true, returns either true or false
//   return x.stars === 2;
// };

// FUNCTION: Checks if two values are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE: assertEquals()
assertEqual(test, 'noma'); // Output: ✅✅✅ Assertion Passed: noma === noma
assertEqual(test, 'Ora'); // Output: 🛑🛑🛑 Assertion Failed: noma !== Ora