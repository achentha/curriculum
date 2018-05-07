/* 
 * filter - takes in an object and a function. Return a new object
 * with key/value if the function returns true. 
 * Example: 
 * input: {5:'blah blah',name:'ho', zolo:'4thech'},(k,v)=>{return v.length > 3}
 * output: {5:'blah blah', zolo:'4thech'}
 * @param {object} a
 * @param {function} b
 * @returns {object} c
*/
const execute = (entArr,b,i=0,res={}) => {
  if (i >= entArr.length) return res;
  if (b(entArr[i][0],entArr[i][1]))
    res[entArr[i][0]] = entArr[i][1];
  return execute(entArr,b,i+1,res);
}

const solution = (a,b)=>{
  let entArr = Object.entries(a);
  return execute(entArr,b);
}
module.exports = {
  solution
}
