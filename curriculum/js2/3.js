/**
 * Given an array, return the same array
 *   where all elements that are not prime is changed to 1
 *   Please reuse your js1 solution
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
