/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

/* ver 1 - for loop
const solution = (a, b) => {
  let count = 0;
  for (let i = 0; i < a.length; i++)
    if (a[i] === b) count++;
  return count;
 }
 */

/* ver 2 - forEach()
const solution = (a, b) => {
  let count = 0;
  a.forEach(el => {if (el === b) count++});
  return count;
 }
 */

/* ver 3 - reduce()
const solution = (a, b) => {
  return a.reduce((count,el) => {
    if (el === b) count++;
    return count;
  },0);
};
*/

/* ver 4 - recursive */
const solution = (a, b, match=0) => {
  if (!a.length) return match;
  if (a[0] === b) match++;
  return solution(a.slice(1), b, match);
};

module.exports = {
  solution,
};
