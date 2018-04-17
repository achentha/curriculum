/**
 * Given an array, return an array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
/* ver 1 - for loop
  let result = [];
  for (let i = 0; i < a.length; i++)
    if (a[i] > 5) result.push(a[i]);
  return result;
 */

/* ver 2 - forEach()
  let result = [];
  a.forEach(el => { if (el>5) result.push(el);});
  return result;
 */

  /* ver 3 - filter() */
  return a.filter(el => el > 5);

};

module.exports = {
  solution,
};
