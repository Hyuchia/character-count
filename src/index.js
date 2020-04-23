const characterCount = text => {
  const separator = '‍';
  const transformed = [...text.trim()];

  // Get all common ascii items
  const ascii = transformed.filter(i => i.length === 1 && i !== separator).length;

  // Get all emoji separator items.
  const separators = transformed.filter(i => i === separator).length;

  // Get individual emoji items
  const emoji = transformed.filter(i => i.length > 1).length;

  const total = ascii + (separators > 0 ? Math.round(emoji / 1.5) / 2 : Math.round(emoji / 2));

  return total;
};

export default characterCount;
