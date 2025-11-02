const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const baseString = String(str);
  if (Object.keys(options).length === 0) {
    return baseString;
  }

  const repeatTimes = options.repeatTimes ?? 0;
  const separator = options.separator ?? '+';
  const addition = ('addition' in options) ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes ?? 0;
  const additionSeparator = options.additionSeparator ?? '|';


  let additionString = addition;
  if (addition && (additionRepeatTimes > 0)) {
    additionString = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  }

  let repeatedString = baseString + additionString;
  if (repeatTimes > 0) {
    repeatedString = Array(repeatTimes).fill(repeatedString).join(separator);
  }

  return repeatedString;
}

module.exports = {
  repeater
};
