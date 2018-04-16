/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

const solution = (a) => {
  if (!a.length) return '';
  return a.reduce((max,el) => {return (el>max)? el : max});
};

module.exports = {
  solution,
};
