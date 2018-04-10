/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, n=2) => {
  if ((a === 1) || (b === 1))
    return 1;

  const min = a > b? b : a;

  if (min < n)
    return 1;

  return (!(a % n) && (!(b % n)))?
    n * solution(a/n, b/n, n) :
    solution(a, b, n+1);
};

module.exports = {
  solution,
};
