/**
 * Given an array, return array of the same length where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  return a.map(el => { return el<=5 ? 0 : el});
};

module.exports = {
  solution,
};
