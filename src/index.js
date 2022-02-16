/**
 * Returns the length of a string, counting special characters such as unicode or
 * emoji ones as a single character instead of multiple ones.
 *
 * @param {string} text
 *
 * @returns {int} The length of the string
 */
const characterCount = (text) => {
  // Variation Selectors: https://emojipedia.org/variation-selector-16/
  const variations = ['️'];

  // Zero Width Joiner: https://emojipedia.org/emoji/%E2%80%8D/
  const separator = '‍';
  const transformed = [...text].filter((i) => variations.indexOf(i) === -1);

  // Get all common ascii items
  const ascii = transformed.filter((i) => i.length === 1 && i !== separator).length;

  // Get all emoji separator items.
  const separators = transformed.filter((i) => i === separator).length;

  // Get individual emoji items
  const emoji = transformed.filter((i) => i.length > 1).length;

  const aproximateLength = separators > 0 ? 2.5 : 2;

  return ascii + Math.round(emoji / aproximateLength);
};

export default characterCount;
