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

/* ver 2 */
const findMax = require('./1.js).findMax;
const buildFreq = (a,obj) => {
  if (!a.length) return obj;
  obj[a[0]] = obj[a[0]] === undefined ? 1 : obj[a[0]}+1;
  return buildFreq(a.slice(1),obj);
}

const solution = (arr) => {
  if (!arr.length) return null;
  if (arr.length === 1) return arr[0];

  let freqObj = buildFreq(arr,{});
  let val = Object.values(freqObj);
  return findMax(val,val[0]);

}

module.exports = {
  solution
}
