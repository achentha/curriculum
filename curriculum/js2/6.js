/**
 * Given an array, return an array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

/* ver 1 - for loop
const solution = (a) => {
  let result = [];
  for (let i = 0; i < a.length; i++)
    if (a[i] > 5) result.push(a[i]);
  return result;
 */

/* ver 2 - forEach()
const solution = (a) => {
  let result = [];
  a.forEach(el => { if (el>5) result.push(el);});
  return result;
 */

/* ver 3 - filter()
const solution = (a) => {
  return a.filter(el => el > 5);
 */

  /* ver 4 - recursive */
const solution = (a,res=[]) => {
  if (!a.length) return res;
  if (a[0] > 5) res.push(a[0]);
  return solution(a.slice(1), res);

  

};

module.exports = {
  solution,
};
