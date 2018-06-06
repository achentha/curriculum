/**
 * Given an array, return the same array
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  return a.map(el => el%2 ? 0 : el);
};

module.exports = {
  solution,
};
