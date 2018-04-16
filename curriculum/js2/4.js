/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

const solution = (a) => {
  if (!a.length) return '';
  return a.reduce((sum,el) => {return (sum+el)},0);
};

module.exports = {
  solution,
};
