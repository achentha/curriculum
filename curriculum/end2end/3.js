// Create an express server that says 'hello' when you visit url/msg
const express = require('express');
const app = express();

app.get('/msg', (req,res) => {
  res.send('hello');
})

app.listen(5286);
