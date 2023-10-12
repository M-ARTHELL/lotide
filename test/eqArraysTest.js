const assert = require('chai').assert;
const _ = require('../index');


describe("#eqArrays", () => {
  it("returns 'true' if input arrays are equal", () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns 'false' if input arrays are not equal", () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns 'false' if input arrays differ by data type", () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("returns 'true' if both arrays are empty", () => {
    assert.deepEqual(_.eqArrays([], []), true);
  });
});