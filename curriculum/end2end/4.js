// Create an express server that sends all the users (that is not you) wrapped
// in <h3> user </h3> tag. When you visit url/users.
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/users', (req,res) => {
  fs.readdir('/home', (err,users) => {
    if (err) throw err;
    res.send(
      users.filter(user => user !== 'badchen')
        .map(user => '<h3>'+user+'</h3>')
        .join('')
    );
  });
})

app.listen(5286);
