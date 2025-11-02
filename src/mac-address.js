const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {String} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const parts = inputString.split('-');
  if (parts.length !== 6) return false;

  for (const part of parts) {
    if (part.length !== 2) return false;
    for (const letter of part) {
      if (!((letter >= '0' && letter <= '9') || (letter >= 'A' && letter <= 'F'))) return false;
    }
  }

  return true;
}

module.exports = {
  isMAC48Address
};
