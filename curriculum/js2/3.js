/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

const isPrime = ((num, i=2) => {
  if (num < 2) return false;
  if (i === num) return true;
  if (num % i === 0) return false;
  return isPrime(num, i+1);
})

const solution = (a) => {
  return a.map(el => {
    return isPrime(el) ? el : 1;
  });
};

module.exports = {
  solution,
};
