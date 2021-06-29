const without = require('../without');

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// TEST CODE for assertEqual() and assertArraysEqual()
// assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => should PASS