/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

/* ver 1
const solution = (a) => {
  if (!a.length) return '';
  return a.reduce((sum,el) => {return (sum+el)},0);
};
*/

/* ver 2 - recursive */
const solution = (a,i=0,sum=0) => {
  if (i === a.length) return sum;

};

module.exports = {
  solution,
};
