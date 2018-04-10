/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, n=2) => {
  if (a < 2)
    return false;

  if (a === n)
    return true;

  return (a % n)? solution(a, n+1) : false;
};

module.exports = {
  solution,
};
