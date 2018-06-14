/**
 * Takes in a likedList, return biggest number.
 * input: list head (l)
 * output: biggest value
 */

const findGreatest = (l,max=Number.NEGATIVE_INFINITY) => {
  if (!l) return max;
  if (l.value > max) max = l.value;
  return findGreatest(l.next,max);
}

const solution = (l) => {
  return findGreatest(l);
}

let a = {value: 2};
let b = {value: -1};
let c = {value: 3};
let d = {value: 1};
let e = {value: 7};
let f = {value: 2};
let g = {value: 4};

a['next'] = b;
b['next'] = c;
c['next'] = d;
d['next'] = e;
e['next'] = f;
f['next'] = g;
g['next'] = null;

const test = () => {
  console.log(`biggest number = ${solution(a)}`);
}

test();
