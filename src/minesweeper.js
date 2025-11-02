const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const sizeY = matrix.length;
  const sizeX = matrix[0].length;
  const res = Array(sizeY).fill().map(() => Array(sizeX).fill(0));

  for (let y = 0; y < sizeY; y++) {
    for (let x = 0; x < sizeX; x++) {
      if (!matrix[y][x]) continue;

      for (let i = y - 1; i < y + 2; i++) {
        for (let j = x - 1; j < x + 2; j++) {
          if (i === y && j === x) continue;
          if ((i > -1 && i < sizeY) && (j > -1 && j < sizeX)) {
            res[i][j]++;
          }
        }
      }
    }
  }

  return res;
}

module.exports = {
  minesweeper
}
