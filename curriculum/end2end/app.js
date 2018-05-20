// All your code should go here
const fs = require('fs');

const showOthers = (arr,i=0) => {
  if (i === arr.length-1) return;
  if (arr[i] !== 'badchen') console.log(arr[i]);
  showOthers(arr,i+1);
}

const allExceptU = () => {
  fs.readdir('/home', (err, users) => {
    if (err) throw err;
    showOthers(users);
  });
}

allExceptU();
