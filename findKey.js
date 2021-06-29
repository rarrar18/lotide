// FUNCTION: Take in object and callback, scans object for first key with cb as truthy
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

module.exports = findKey;