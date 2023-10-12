const assert = require('chai').assert;
const _ = require('../index');

describe("#countLetters", () => {
  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house'", () => {
    assert.deepEqual(_.countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });

  it("returns {3: 1, 2: 2, 1: 3} for '111223'", () => {
    assert.deepEqual(_.countLetters("111223"), {'3': 1, '2': 2, '1': 3});
  });

  it("returns empty object when passed empty string", () => {
    assert.deepEqual(_.countLetters(""), {} );
  });
});