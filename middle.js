// FUNCTION: Return an array with only middle element(s) of the provided array
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

module.exports = middle;