const assert = require('chai').assert;
const _ = require('../index');


describe("#letterPositions", () => {
  it("returns {h: [0], i: [i]} for 'hi'", () => {
    assert.deepEqual(_.letterPositions("hi"), {h: [0], i: [1]}); 
  });

  it("returns {l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12]} for 'lighthouse in the house'", () => {
    assert.deepEqual(_.letterPositions("lighthouse in the house"), {l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12]}); 
  });

  it("returns {} for ''", () => {
    assert.deepEqual(_.letterPositions("hi"), {h: [0], i: [1]}); 
  });
});