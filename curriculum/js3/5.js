/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const execute = (keys,values,b) => {
  if (!keys.length) return;
  b(keys.shift(), values.shift());
  execute(keys,values,b);
}

const solution = (a,b)=>{
  let keys = Object.keys(a);
  let values = Object.values(a);
  execute(keys,values,b);
}
module.exports = {
  solution
}
