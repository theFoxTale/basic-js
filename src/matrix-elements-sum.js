const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const size = matrix[0].length;
  const rowWithNull = Array(size).fill(false);

  for (let row of matrix) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 0) {
        rowWithNull[i]  = true;
      } else if (!rowWithNull[i]) {
        sum += row[i];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};