const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 *
*     --discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
*     --discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
*     --double-next удваивает следующий за ней элемент исходного массива в преобразованном массиве.
*     --double-prev удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform( arr) {
    if (!(arr instanceof Array)) {
        throw new Error(`'arr' parameter must be an instance of the Array!`);
    }

    const newArr = [];
    let needDiscard = false;
    let canEdit = true;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                needDiscard = true;
                canEdit = false;
                break;
            case '--discard-prev':
                if (canEdit && newArr.length > 0) {
                    newArr.pop();
                }
                break;
            case '--double-next':
                if (i < arr.length - 1) {
                    newArr.push(arr[i + 1]);
                }
                break;
            case '--double-prev':
                if (canEdit && i > 0) {
                    newArr.push(arr[i - 1]);
                }
                break;
            default:
                if (!needDiscard) {
                    newArr.push(arr[i]);
                    canEdit = true;
                } else {
                    needDiscard = false;
                }
                break;
        }
    }
    return newArr;
}

module.exports = {
  transform
};
