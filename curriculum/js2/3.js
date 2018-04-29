/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

const isPrime  = require('../js1/7.js');
const solution = (a => 
  a.map(el => isPrime.solution(el) ? el : 1)
)

module.exports = {
  solution,
};
