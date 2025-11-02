const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);

  let maxNumber = 0;
  for (let i = 0; i < str.length; i++) {
    const stepNumber = Number(str.substring(0, i) + str.substring(i + 1));
    if (stepNumber > maxNumber) {
      maxNumber = stepNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
