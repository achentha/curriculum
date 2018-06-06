/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, n=2, result=0) => {
  if ((a < 2) || (a === n))
    return result;

  return solution(a, n+1, result + ((a % n) ? 0 : n));

};

module.exports = {
  solution,
};
