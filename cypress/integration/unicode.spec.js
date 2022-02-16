import characterCount from '../../dist/character-count.min.js';

describe('Unicode lengths', function () {
  it('Counts simple unicode characters length correctly', function () {
    expect(characterCount('ñ')).to.equal(1);
  });

  it('Counts complex unicode characters length correctly', function () {
    expect(characterCount('𒐪')).to.equal(1);
    expect(characterCount(' ̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺ͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩͩ')).to.equal(119);
  });
});
