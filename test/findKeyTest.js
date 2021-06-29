const findKey = require('../findKey');

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

// TEST CODE: assertEquals()
// assertEqual(test, 'noma'); // Output: ✅✅✅ Assertion Passed: noma === noma
// assertEqual(test, 'Ora'); // Output: 🛑🛑🛑 Assertion Failed: noma !== Ora