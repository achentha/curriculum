/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, n=2) => {
  if ((a < 2) || (a === n))
    return 0;

  return ((a % n) ? 0 : n) + solution(a, n+1);

};

module.exports = {
  solution,
};
