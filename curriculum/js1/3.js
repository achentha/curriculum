/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b, result='') => {
  if (a === 0)
    return result;

  return solution(a-1, b, result+'hello');
}

module.exports = {
  solution,
};
