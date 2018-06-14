/**
 * findLoop - takes in a linkedList, returns if it loops on itself
 * @param linkedList l
 * @returns true if it loops, false otherwise
 */

const findLoop = (sp,fp) => {
  if (sp === fp) return true;
  if (!sp.next || !fp.next || !fp.next.next) return false;
  sp = sp.next;
  fp = fp.next.next;
  return findLoop(sp,fp);
}

const solution = (l) => {
  if (!l || !l.next || !l.next.next) return false;
  let sp = l.next;
  let fp = l.next.next;
  return findLoop(sp,fp);
}

let a = {value: 1};
let b = {value: 2};
let c = {value: 3};
let d = {value: 4};
let e = {value: 5};
let f = {value: 6};
let g = {value: 7};
let h = {value: 8};
let i = {value: 9};
let j = {value: 10};
let k = {value: 11};

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;
j.next = k;
//k.next = null;
k.next = d;

const test = () => {
  console.log(`List is ${solution(a) ? '' : 'not'} looped`);
}

test();
