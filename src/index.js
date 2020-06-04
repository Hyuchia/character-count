const characterCount = text => {
  // Variation Selectors: https://emojipedia.org/variation-selector-16/
  const variations = ['️'];

  // Zero Width Joiner: https://emojipedia.org/emoji/%E2%80%8D/
  const separator = '‍';
  const transformed = [...text.trim()].filter(i => variations.indexOf(i) === -1);

  // Get all common ascii items
  const ascii = transformed.filter(i => i.length === 1 && i !== separator).length;

  // Get all emoji separator items.
  const separators = transformed.filter(i => i === separator).length;

  // Get individual emoji items
  const emoji = transformed.filter(i => i.length > 1).length;

  if (separators > 0) {
    return ascii + Math.round(emoji / 2.5);
  } else {
    return ascii + Math.round(emoji / 2);
  }
};

export default characterCount;
