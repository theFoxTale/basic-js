const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const parts = {};
  for (const domain of domains) {
    const items = domain.split('.').reverse();
    let domainString = '';
    for (const item of items) {
      domainString += '.' + item;
      (domainString in parts) ? parts[domainString]++ : parts[domainString] = 1;
    }
  }
  return parts;
}

module.exports = {
  getDNSStats
};
