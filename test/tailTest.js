const assert = require('chai').assert;
const _ = require('../index');
 
describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(_.tail([1, 2, 3]), [2, 3]);
  });

  it("returns [5, 6] for [14, 5, 6]", () => {
    assert.deepEqual(_.tail([4, 5, 6]), [5, 6]); 
  });

  it("returns ['bonk'] for ['bink', 'bonk']", () => {
    assert.deepEqual(_.tail(['bink', 'bonk']), ['bonk']); 
  });

  it("returns [] for []", () => {
    assert.deepEqual(_.tail([]), []);
  });
});