/* 
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

const buildNumObjArr = (a,c=[]) => {
  if (!a.length) return c;
  c.push({[a[0]] : true});
  a.shift();
  return buildNumObjArr(a,c);
}

const findNum = (arr,target) =>{
  if (!arr.length) return false;
  if (arr[0][target] === true) return true;
  return findNum(arr.slice(1),target);
}

const pairAdd2b = (arr,b) => {
  if (arr.length < 2) return false;
  let target = b - parseInt(Object.keys(arr[0]));
  arr.shift();
  if (findNum(arr,target)) return true;
  return pairAdd2b(arr,b);
}

const solution = (a,b) => {
  if (a.length < 2) return false;
  let arr = buildNumObjArr(a);
  return pairAdd2b(arr,b);
}

module.exports = {
  solution
}
