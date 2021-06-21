//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  //return the first item in an array
  const found = array[0];
  return found;
}

//TEST CODE
assertEqual(head([5,6,7]), 5); //5 is the head of this array
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //"Hello" is the head of this array
assertEqual(head([]),undefined); //empty array yields undefined as its head
assertEqual(head([1]),2); //single element array still yields that one element as its head