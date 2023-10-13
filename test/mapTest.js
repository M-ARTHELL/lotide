const assert = require('chai').assert;
const _ = require('../index');

describe("#map", () => {
    it("returns ['g', 'c', 't', 'm', 't'] for (['ground', 'control', 'to', 'major', 'tom'], word => word[0])", () => {
      assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);
    });
  
    it("returns ['ground', 'control', 'to', 'major', 'tom'] for (['ground', 'control', 'to', 'major', 'tom'], word => word)", () => {
        assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word), ['ground', 'control', 'to', 'major', 'tom']);
    });

    it("returns ['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot'] for (['ground', 'control', 'to', 'major', 'tom'], word => word.split('').reverse().join(''))", () => {
        assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word.split('').reverse().join('')), ["dnuorg", "lortnoc", "ot", "rojam", "mot"]);
    });

    it("returns [2, 4, 6, 8, 10] for ([1, 2, 3, 4, 5], x => x * 2", () => {
        assert.deepEqual(_.map([1, 2, 3, 4, 5], x => x * 2), [2, 4, 6, 8, 10]);
    });
  });