import characterCount from '../../dist/character-count.min.js';

describe('Emoji lengths', function () {
  it('Counts simple emojis length correctly', function () {
    expect(characterCount('😀')).to.equal(1);
    expect(characterCount('🥺')).to.equal(1);
    expect(characterCount('🤢')).to.equal(1);
    expect(characterCount('🤖')).to.equal(1);
  });

  it('Counts composite emojis length correctly', function () {
    expect(characterCount('👩🏿‍🦽')).to.equal(1);
    expect(characterCount('👩‍👧‍👧')).to.equal(1);
    expect(characterCount('🤲🏿')).to.equal(1);
    expect(characterCount('🙇‍♂️')).to.equal(1);
    expect(characterCount('👨‍🏫')).to.equal(1);
  });
});
