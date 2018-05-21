// All your code should go here
const fs = require('fs');
const express = require('express');

const app = express();

app.get('/msg', (req,res) => {
  res.send('hello');
});

app.listen(5286);
