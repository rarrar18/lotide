const tail = function(array) {
  //returns all items in array except for the head
  const newArray = array.slice(1); //removes first element of original array
  console.log(newArray);
};

module.exports = tail;