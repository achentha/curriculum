const fs = require('fs');

fs.readdir('/home', (err,files) => {
  files.forEach(f => {
    if (f !== 'badchen') console.log(f); 
  });
});
