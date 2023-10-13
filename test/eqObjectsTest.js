const assert = require('chai').assert;
const _ = require('../index');

describe("#eqObjects", () => {
  it("returns true when comparing {color: `red`, size: `medium`} and {size: `medium`, color: `red`}", () => {
    assert.deepEqual(_.eqObjects({color: "red", size: "medium"}, {size: "medium", color: "red"}), true);
  });

  it("returns true when comparing {twoDigit: 10, oneDigit: 1 } and {twoDigit: 10, oneDigit: 1 }", () => {
    assert.deepEqual(_.eqObjects({twoDigit: 10, oneDigit: 1}, {twoDigit: 10, oneDigit: 1}), true);
  });

  it("returns false when comparing {twoDigit: 10, oneDigit: 1 } and {twoDigit: `10`, oneDigit: `1` }", () => {
    assert.deepEqual(_.eqObjects({twoDigit: 10, oneDigit: 1 }, {twoDigit: `10`, oneDigit: `1`}), false);
  });

  it("returns false when comparing {color: `red`, size: `medium`} and {size: `medium`, color: `red`, sleeveLength: `long`}", () => {
    assert.deepEqual(_.eqObjects({color: "red", size: "medium"}, {size: "medium", color: "red", sleeveLength: "long"}), false);
  });

  it("returns true when comparing {colors: [`red`, `blue`], size: `medium` } and { size: `medium`, colors: [`red`, `blue`]}", () => {
    assert.deepEqual(_.eqObjects({colors: ["red", "blue"], size: "medium"}, {size: "medium", colors: ["red", "blue"]}), true);
  });

  it("returns false when comparing {colors: [`red`, `blue`], size: `medium` } and { size: `medium`, colors: [`red`, `blue`], sleeveLength: `long`}", () => {
    assert.deepEqual(_.eqObjects({colors: ["red", "blue"], size: "medium"}, {size: "medium", colors: ["red", "blue"], sleeveLength: "long"}), false);
  });

  it("returns true when comparing {colors: [`red`, `blue`], size: `medium` , circumference: 50} and {circumference: 50, colors: [`red`, `blue`], size: `medium`}", () => {
    assert.deepEqual(_.eqObjects({colors: ["red", "blue"], size: "medium", circumference: 50}, {circumference: 50, colors: ["red", "blue"], size: "medium"}), true);
  });

  it("returns false when comparing {color: `red`, size: `medium`} and {size: `medium`, color: `red`}", () => {
    assert.deepEqual(_.eqObjects({color: "red", size: "medium"}, {}), false);
  });

  it("returns true when comparing {} and {}", () => {
    assert.deepEqual(_.eqObjects({}, {}), true);
  });
});



