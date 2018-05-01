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
const buildFreq = (a,obj={}) => {
  if (!a.length) return obj;
  obj[a[0]] = obj[a[0]] === undefined ? 1 : obj[a[0]]+1;
  return buildFreq(a.slice(1), obj);
}

const findDup = (entry,res=[]) => {
  if (!entry.length) return res;
  if (entry[0][1] > 1) res.push(parseInt(entry[0][0]));
  return findDup(entry.splice(1),res);
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
