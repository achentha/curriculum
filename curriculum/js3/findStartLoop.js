/**
 * findStartLoop - takes in a linkedList, returns the node value where
 * the circular loop starts
 * @param looped-linkedList l
 * @returns {number} value
 */

const findMeetNode = (sp,fp) => {
  if (sp === fp) return sp;
  sp = sp.next;
  fp = fp.next.next;
  return findMeetNode(sp,fp);
}

const findStartLoop = (p1,p2) => {
  if (p1 === p2) return p1.value;
  p1 = p1.next;
  p2 = p2.next;
  return findStartLoop(p1,p2);
}

const solution = (l) => {
  let sp = l.next;
  let fp = l.next.next;
  let mp = findMeetNode(sp,fp);
  return findStartLoop(l,mp);
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

a['next'] = b;
b['next'] = c;
c['next'] = d;
d['next'] = e;
e['next'] = f;
f['next'] = g;
g['next'] = h;
h['next'] = i;
i['next'] = j;
//j['next'] = d;
j['next'] = f;

const test = (l) => {
  console.log(`start loop node value = ${solution(l)}`);
}

test(a);
