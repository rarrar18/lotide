// FUNCTION
const letterPositions = function(sentence) {
  console.log(sentence);
  const count = {}; //empty object stores count
  for (let i = 0; i < sentence.length; i++) { //iterates through the sentence input
    // console.log(sentence[i]);
    if (sentence[i] !== " ") { //if the element in the position is not white space, proceed
      // console.log(count[sentence[i]]);
      if (count[sentence[i]] === undefined) { //when all are undefined, define them after
        count[sentence[i]] = [i]; // outputs each index as an array
      } else {
        count[sentence[i]].push(i); //appends each new letter index to its own array
      }
    }
  }
  console.log(count); //prints out the resulting count of each letter's array of indices
};
// TEST CODE
letterPositions("lighthouse in the house");