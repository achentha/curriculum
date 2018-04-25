/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const solution = (obj)=>{
  let val = Object.values(obj);
  if (val.length === 0) return null;
  return val.reduce((max,el) => el>max? el : max);
}

module.exports = {
  solution
}

