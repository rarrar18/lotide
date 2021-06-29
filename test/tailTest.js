const assert = require('chai').assert;
const tail = require('../tail');
/*
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// More Test Cases: Single-element and empty arrays
const single = [1];
tail(single);
const empty = [];
tail(empty);
assertEqual(single.length, empty);
*/

describe ("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it ("returns tail end of ['Yo Yo', 'Lighthouse', 'Labs'] array", () => {
    tail(words);
  });
  it ("returns 3 for words.length of ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(words.length, 3);
  });
  // it ("returns tail end of [1]", () => {
  //   tail([1]);
  // });
  // it ("returns tail end of []", () => {
  //   tail([]);
  // });
  it ("returns empty for single.length", () => {
    const single = [1];
    const singleTail = tail(single);
    const empty = [];
    const emptyTail = tail(empty);
    // assert.strictEqual(singleTail.length, emptyTail.length);
    assert.deepEqual(singleTail, emptyTail);
  });
});