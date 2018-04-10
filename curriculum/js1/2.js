/**
 * Takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

const solution = (a, b, c) => {
  const max = a > b? a : b;
  return max > c? max : c;
};

module.exports = {
  solution,
};
