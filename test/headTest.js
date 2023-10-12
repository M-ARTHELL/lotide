const assert = require('chai').assert;
const _ = require('../index');


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(_.head([1, 2, 3]), 1);
  });

  it("returns 'string' for ['string', 'another string']", () => {
    assert.strictEqual(_.head(['string', 'another string']), 'string'); 
  });

  it("returns 'single' for ['single']", () => {
    assert.strictEqual(_.head(['single']), 'single'); 
  });

  it("returns undefined for []", () => {
    assert.strictEqual(_.head([]), undefined); 
  });
});