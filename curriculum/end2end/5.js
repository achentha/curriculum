// Create a file called test.html that has an input box, a text area, and a
// button
const fs = require('fs');

const buff = 
   '<body>\n' +
   '  <input type=\"text\" name=\"myInput\" value=\"enter your input here\">\n' +
   '  <textarea name=\"myTextArea\" rows=\"8\" cols=\"80\">My Text Area</textarea>\n' +
   '  <button type=\"button\" name=\"myButton\">button</button>\n' +
   '</body>\n';

fs.writeFile('test.html', buff, (err) => {
  if (err) throw err;
  console.log('file test.html created successfully');
});
