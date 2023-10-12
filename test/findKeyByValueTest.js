const assert = require('chai').assert;
const _ = require('../index');

describe("#findKeyByValue", () => {
  
  it("returns 'anime' when offered ({adult: 'The Boondocks', kids: 'Rise of TMNT', anime: 'Trigun'}, 'Trigun')", () => {
    assert.deepEqual(_.findKeyByValue({adult: 'The Boondocks', kids: 'Rise of TMNT', anime: 'Trigun'}, "Trigun"), "anime");
  });

  it("returns 'undefined' when offered ({adult: 'The Boondocks', kids: 'Rise of TMNT', anime: 'Trigun'}, 'Good Omens')", () => {
    assert.deepEqual(_.findKeyByValue({adult: 'The Boondocks', kids: 'Rise of TMNT', anime: 'Trigun'}, "Good Omens"), undefined);
  });

  it("returns 'undefined' when offered ({adult: 'The Boondocks', kids: 'Rise of TMNT', anime: 'Trigun'}, '')", () => {
    assert.deepEqual(_.findKeyByValue({adult: 'The Boondocks', kids: 'Rise of TMNT', anime: 'Trigun'}, ""), undefined);
  });

  it("returns 'undefined' when offered ({}, 'The Boondocks')", () => {
    assert.deepEqual(_.findKeyByValue({}, "The Boondocks"), undefined);
  });

  it("returns 'undefined' when offered ({}, '')", () => {
    assert.deepEqual(_.findKeyByValue({}, ""), undefined);
  });
});