const assert = require('chai').assert;
const _ = require('../index');


describe("#countOnly", () => {
  it("returns { Karl: 1, Tim: 1, Joe: 1} for [`Karl`, `Tim`, `Joe`] and { `Karl`: true, `Tim`: true, `Joe`: true}", () => {
      assert.deepEqual(_.countOnly(["Karl", "Tim", "Joe"], { "Karl": true, "Tim": true, "Joe": true}), { "Karl": 1, "Tim": 1, "Joe": 1});
  });

  it("returns {} for [`Karl`, `Tim`, `Joe`] and { `Karl`: false, `Tim`: false, `Joe`: false}", () => {
    assert.deepEqual(_.countOnly(["Karl", "Tim", "Joe"], { "Karl": false, "Tim": false, "Joe": false}), {});
  });

  it("returns {`Tim`: 1} for [`Karl`, `Tim`, `Joe`] and { `Karl`: false, `Tim`: true, `Joe`: false}", () => {
    assert.deepEqual(_.countOnly(["Karl", "Tim", "Joe"], { "Karl": false, "Tim": true, "Joe": false}), { "Tim": 1});
  });

  it("returns {} for [] and { `Karl`: true, `Tim`: true, `Joe`: true}", () => {
    assert.deepEqual(_.countOnly([], { "Karl": true, "Tim": true, "Joe": true}), {});
  });

  it("returns {} for [`Karl`, `Tim`, `Joe`] and {}", () => {
    assert.deepEqual(_.countOnly(["Karl", "Tim", "Joe"], {}), {});
  });

  it("returns {`Tim`: 2} for [`Karl`, `Tim`, `Joe`, `Tim`] and { `Bob`: true, `Tim`: true, `Henry`: true}", () => {
    assert.deepEqual(_.countOnly(["Karl", "Tim", "Joe", "Tim"], {"Bob": true, "Tim": true, "Henry": true}), {"Tim": 2});
  });

  it("returns {`Tim`: 2} for [`Bob`, `Tim`, `Henry`, `Tim`] and { `Karl`: true, `Tim`: true, `Joe`: true}", () => {
    assert.deepEqual(_.countOnly(["Bob", "Tim", "Henry", "Tim"], {"Karl": true, "Tim": true, "Joe": true}), {"Tim": 2});
  });
});