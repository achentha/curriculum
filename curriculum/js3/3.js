/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const solution = (a)=>{
  if (a.length < 2) return [];

  let obj = {};
  a.forEach(el => { obj[el] = obj[el] === undefined ? 1 : obj[el]+1; });

  let num = Object.keys(obj);
  let freq = Object.values(obj);
  return num.filter((el,idx) => freq[idx] > 1).map(el => parseInt(el));
}

module.exports = {
  solution
}
