const tail = function(array) {
  //returns all items in array except for the head
  if (array.length > 1) {
    return array.slice(1); //removes first element of original array
  } else {
    return [];
  }
};

module.exports = tail;