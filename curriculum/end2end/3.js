// Create an express server that sends back <h1>, <input>, and <button> tag. 
// When you visit url/hello. Make the h1 tag red using <style> (CSS)
const express = require('express');
const app = express();

app.get('/hello', (req,res) => {
  res.send(
    `<h1>Hi There!</h1>
     <input type="text" name="" value="">
     <button type="button" name="">submit</button>
     <style>
       h1 {
         color: red;
       }
     </style>
    `);
})

app.listen(5286);
