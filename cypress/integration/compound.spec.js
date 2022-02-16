import characterCount from '../../dist/character-count.min.js';

describe('Compound text lengths', function () {
  it('Counts compound texts length correctly', function () {
    expect(characterCount('😀 This should be a text 🤲🏿 with with only 50 characters 🙇‍♂️')).to.equal(56);
  });
});
