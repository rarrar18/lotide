//The map function will return a new array based on the results of the callback function.
const map = function(arr, cb) {
  console.log('array: ', arr); // Output: [ 'ground', 'control', 'to', 'major', 'tom' ]
  console.log('callback: ', cb); // Output: [Function]
  const results = []; //empty array to hold results
  for (let item of arr) {
    results.push(cb(item)); // pushes the return value of the callback function
  }
  return results; 
};

module.exports = map;