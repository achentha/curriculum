/* 
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

const buildNumObjArr = (a,i=0,c=[]) => {
  if (i >= a.length) return c;
  c.push({[a[i]] : true});
  return buildNumObjArr(a,i+1,c);
}

const findNum = (arr,target,j) =>{
  if (j >= arr.length) return false;
  if (arr[j][target] === true) return true;
  return findNum(arr,target,j+1);
}

const pairAdd2b = (arr,b,i=0) => {
  if (i >= arr.length) return false;
  let target = b - parseInt(Object.keys(arr[i]));
  if (findNum(arr,target,i+1)) return true;
  return pairAdd2b(arr,b,i+1);
}

const solution = (a,b) => {
  if (a.length < 2) return false;
  let arr = buildNumObjArr(a);
  return pairAdd2b(arr,b);
}

module.exports = {
  solution
}
