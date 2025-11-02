const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numStr = String(n);

  let newNumber = 0;
  while (numStr.length > 1) {
    newNumber = numStr.split('').reduce((sum, digit) => sum + Number(digit), 0);
    numStr = String(newNumber);
  }

  return newNumber;
}

module.exports = {
  getSumOfDigits
};
