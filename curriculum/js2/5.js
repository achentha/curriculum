/**
 * Given an array, return the largest element
 * @param {array} a
 * @returns {number}
 */

/* ver 1 - use reduce()
const solution = (a) => {
  if (!a.length) return '';
  return a.reduce((max,el) => {return (el>max)? el : max});
};
*/

/* ver 2 - recursive */
const solution = (a,i=1,max=a[0]) => {
  if (a.length === 0) return 0;
  if (i >= a.length) return max;
  if (a[i] > max) max = a[i];
  return solution(a,i+1,max);
}

module.exports = {
  solution,
};
