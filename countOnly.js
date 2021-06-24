const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// FUNCTION: report back how many instances of each string were found in the allItems array of strings
const countOnly = function(allItems, itemsToCount) {
  let result = {}; // creates empty object to store results
  //loop through the first array
  for (let name of allItems) {
    //check for each condition in second array
    if (itemsToCount[name]) {
      if (result[name]) {
        result[name] += 1; // increments the name counter for every occurence
      } else {
        result[name] = 1; // assigns a value of 1 for a single occurence of the name
      }
    }
  }
  return result; //return an object that can represent the stats
};


// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);