/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

/* ver 1 - reduce
const solution = (obj)=>{
  let val = Object.values(obj);
  if (val.length === 0) return null;
  return val.reduce((max,el) => el>max? el : max);
}
*/

/* ver 2 - recursive
const findMax = (arr,max) => {
  if (!arr.length) return max;
  if (arr[0] > max) max = arr[0];
  return findMax(arr.slice(1),max);
}

const solution = (obj) => {
  let val = Object.values(obj);
  if (!val.length) return null;
  else if (val.length === 1) return val[0];
  return findMax(val, val[0]);
}
*/

/* ver 3 - using index i instead of slice() */
const findMax = (arr, max=arr[0], i=1) => {
  if (i >= arr.length) return max;
  return findMax(arr, arr[i] > max? arr[i] : max, i+1);
}

const solution = (obj) => {
  let val = Object.values(obj);
  if (!val.length) return null;
  else if (val.length === 1) return val[0];
  return findMax(val);

}

module.exports = {
  solution: solution,
  finxMax: findMax,
}

