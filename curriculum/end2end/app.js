// All your code should go here
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req,res) => {
  fs.readdir('/', (err,files) => {
    if (err) throw err;
    res.send(files);
  });
});

app.listen(5286);
