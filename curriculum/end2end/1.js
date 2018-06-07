const fs = require('fs');

fs.readdir('/home', (err,files) => {
  if (err) throw err;
  files.forEach(file => {
    if (file !== 'badchen') console.log(file);
  });
});
