// All your code should go here
const fs = require('fs');

const solution = () => {
  const buff = 
   '<body>\n' +
   '  <input type=\"text\" name=\"\" value=\"\">\n' +
   '  <button type=\"button\" name=\"button\">button</button>\n' +
   '</body>\n';

  fs.unlink('./test.html', (err) => {
    if (err) throw err;
    fs.appendFile('./test.html', buff, (err) => {
      if (err) throw err;
    });
  });
}

solution();
