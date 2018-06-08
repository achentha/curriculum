// Create an express server that serves all files on your computer
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/files', (req,res) => {
  fs.readdir('/', (err,files) => {
    if (err) throw err;
    res.send(files);
  });
})

app.listen(5286);
