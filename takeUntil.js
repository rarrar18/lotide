// FUNCTION: Returns a slice of the array with elements taken from the beginning
const takeUntil = function(array, callback) {
  // Loop through the elements of the array
  let results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  // return array.filter(callback);
};

module.exports = takeUntil;