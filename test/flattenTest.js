const assert = require('chai').assert;
const _ = require('../index');


describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns ['5', '1', '12', '7'] for ['5', '1', ['12'], '7']", () => {
    assert.deepEqual(_.flatten(['5', '1', ['12'], '7']), ['5', '1', '12', '7']); 
  });

  it("returns [5, 1, 4, 47, 52] for [5, 1, 4, [47], 52, []]", () => {
    assert.deepEqual(_.flatten([5, 1, 4, [47], 52, []]), [5, 1, 4, 47, 52]); 
  });

  it("returns [0] for [[0]]", () => {
    assert.deepEqual(_.flatten([[0]]), [0]); 
  });

  it("returns [] for []", () => {
    assert.deepEqual(_.flatten([]), []); 
  });
});