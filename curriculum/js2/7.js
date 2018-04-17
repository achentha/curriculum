/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (a, b) => {
/* ver 1 - for loop
  let count = 0;
  for (let i = 0; i < a.length; i++)
    if (a[i] === b) count++;
  return count;
 */

/* ver 2 - forEach()
  let count = 0;
  a.forEach(el => {if (el === b) count++});
  return count;
 */

  /* ver 3 - reduce() */
  return a.reduce((count,el) => {
    if (el === b) count++;
    return count;
  },0);

};

module.exports = {
  solution,
};
