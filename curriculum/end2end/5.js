// Create a server so that when you visit /newMessage?name=eucaeu&....,
// the data gets stored into an array. Display the messages when you go to
// /chat

const express = require('express');
const app = express();

const messages = [];

app.get('/newMessage', (req,res) => {
  messages.push(req.query.name);
  res.send(req.query);
});

app.get('/chat', (req,res) => {
  res.json(messages);
});

app.listen(5286);
