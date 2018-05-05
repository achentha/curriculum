/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

/* ver 1 - forEach() & filter()
const solution = (a)=>{
  if (a.length < 2) return [];

  let obj = {};
  a.forEach(el => { obj[el] = obj[el] === undefined ? 1 : obj[el]+1; });

  let num = Object.keys(obj);
  let freq = Object.values(obj);
  return num.filter((el,idx) => freq[idx] > 1).map(el => parseInt(el));
}
*/

/* ver 2 - recursive */
const buildFreq = (a,i=0,obj={}) => {
  if (i >= a.length) return obj;
  obj[a[i]] = obj[a[i]] === undefined ? 1 : obj[a[i]]+1;
  return buildFreq(a,i+1,obj);
}

const findDup = (entry,i=0,res=[]) => {
  if (i >= entry.length) return res;
  if (entry[i][1] > 1) res.push(parseInt(entry[i][0]));
  return findDup(entry,i+1,res);
}

const solution = (a) => {
  if (a.length < 2) return [];
  let freq = buildFreq(a);
  let entry = Object.entries(freq);  //entry[i][0] = num, entry[i][1] = freq
  return findDup(entry);
}

module.exports = {
  solution
}
