/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, n=2, result=1) => {
  if ((a === 1) || (b === 1))
    return result;

  const min = a > b? b : a;

  if (min < n)
    return result;

  return (!(a % n) && (!(b % n)))?
    solution(a/n, b/n, n, n*result) :
    solution(a, b, n+1, result);
};

module.exports = {
  solution,
};
