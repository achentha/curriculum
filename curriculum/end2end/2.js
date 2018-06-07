const fs = require('fs');

fs.readdir('/home', (err,files) => {
  if (err) throw err;
  fs.writeFile('/home/badchen/users.txt',
               files.filter(file => file !== 'badchen'),
               (err) => {if (err) throw err});
});
