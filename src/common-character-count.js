const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const s1Array = s1.split('');
  const s2Array = s2.split('');
  let commonLetters = 0;

  for (let i = 0; i < s1Array.length; i++) {
    const letter = s1Array[i];
    const idx = s2Array.indexOf(letter);

    if (idx > -1) {
      commonLetters++;
      s2Array.splice(idx, 1);
    }
  }

  return commonLetters;
}

module.exports = {
  getCommonCharacterCount
};
