// All your code should go here
const fs = require('fs');

const writeOthers = (arr,i=0) => {
    if (i === arr.length-1) return;
    if (arr[i] !== 'badchen') {
      fs.appendFile('/home/badchen/users.txt', arr[i] + ',\n', (err) => {
        if (err) throw err;
      });
    }
    writeOthers(arr,i+1);
}

const allExceptU = () => {
    fs.readdir('/home', (err, users) => {
          if (err) throw err;
          fs.unlink('/home/badchen/users.txt', (err) => {
            if (err) throw err;
            writeOthers(users);
          });
    });
}

allExceptU();
