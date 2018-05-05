/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @param return {number}
 */

/* ver 1 - forEach() & reduce()
const solution = (arr)=>{
  if (!arr.length) return null;

  let obj = {};  //key -> number, value -> frequency
  arr.forEach(el => {
    obj[el] = (obj[el] === undefined) ? 1 : obj[el]+1;
  });
  
  let values = Object.values(obj);
  let max = 0;

  //get index of highest value
  let i = values.reduce((acc, el, idx) => {
    if (el > max) {
      max = el;
      return idx;
    }
    else {
      return acc;
    }
  },0);

  //key is the number
  return parseInt(Object.keys(obj)[i]);
}
*/

/* ver 2 - recursive */
const buildFreq = (a,i=0,obj={}) => {
  if (i >= a.length) return obj;
  obj[a[i]] = obj[a[i]] === undefined ? 1 : obj[a[i]]+1;
  return buildFreq(a,i+1,obj);
}

const findMax = (a,max,i=0,iMax=0) => {
  if (i >= a.length) return iMax;
  if (a[i] > max) {
    max = a[i];
    iMax = i;
  }
  return findMax(a, max, i+1 ,iMax);
}

const solution = (arr) => {
  if (!arr.length) return null;
  if (arr.length === 1) return arr[0];

  let freqObj = buildFreq(arr);
  let val = Object.values(freqObj);
  let num = Object.keys(freqObj);
  let iMax = findMax(val,val[0]);

  return parseInt(num[iMax]);
}

module.exports = {
  solution
}
