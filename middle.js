// FUNCTION IMPLEMENTATION: Takes in two arrays and returns true or false, based on a perfect match
const assertArraysEqual = function(actual, expected) {
  // first compare the lengths of each array
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 False`);
    return false;
  } else { // then compare every element of each array
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑 False`);
        return false;
      }
    } // return true if each element matches, meaning same array
    console.log(`✅✅✅ True`);
    return true;
  }
};
// FUNCTION: Return an array with only the middle element(s) of the provided array
const middle = function(array) {
  const midInd = Math.floor(array.length / 2); // declare middle index variable
  let result = []; //declare empty array to store results
  
  if (array <= 2) { //If array has less than two elements, no middle, return empty array
    return [];
  } if (array.length % 2) { // for arrays with an even number of elements
    result.push(array[midInd]); // pushes single middle element onto results
  } else if (array.length > 2) {
    result.push(array[midInd - 1], array[midInd]); //pushes middle elements onto results
  } return result;
};

// For arrays with one or two elements, there is no middle. Return an empty array.
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
// For arrays with odd number of elements, return array with single middle element.
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));// => [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]