const assert = require('chai').assert;
const tail = require('../tail');

describe ("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it ("returns tail end of ['Yo Yo', 'Lighthouse', 'Labs'] array", () => {
    tail(words);
  });
  it ("returns 3 for words.length of ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(words.length, 3);
  });
  it ("returns empty for single.length", () => {
    const single = [1];
    const singleTail = tail(single);
    const empty = [];
    const emptyTail = tail(empty);
    // assert.strictEqual(singleTail.length, emptyTail.length);
    assert.deepEqual(singleTail, emptyTail);
  });
});