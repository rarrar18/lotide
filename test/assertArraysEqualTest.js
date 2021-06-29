const assertArraysEqual = require('../assertArraysEqual.js')
// const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns true for matching [1, 2, 3] with [1, 2, 3]", () => {
    assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
  });
  it("returns false for matching [1, 2, 3] with [3, 2, 1]", () => {
    assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
  });
  it("returns true for matching ['1', '2', '3'] with ['1', '2', '3']", () => {
    assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
  });
  it("returns false for matching ['1', '2', '3'] with ['1', '2', 3]", () => {
    assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
  });
});