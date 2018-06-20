// Create a Stupid DB to Store Your Chatroom's Messages
const fs = require('fs');
const express = require('express');
const app = express();

let messages = [];

app.get('/newchat', (req,res) => {
  messages.unshift(req.query.message);
  fs.writeFile('chatDb.txt', JSON.stringify(messages), (err => {
    if (err) throw err;
  }));
  res.json(messages);
});

app.get('/allchats', (req,res) => {
  res.json(messages);
});

app.get('/chat', (req,res) => {
  fs.readFile('chatDb.txt', (err,data) => {
    if (err) throw err;
     messages = JSON.parse(data);
  });

  res.send(`
    <h1>My Chat</h1>
    <input type="text" class="chat__input" />
    <button type="submit" class="chat__submitButton">sumbit</button>
    <div class="chatData">
    </div>

    <script>
      const submit = () => {
        const val = document.getElementsByClassName('chat__input')[0].value;
        fetch('https://badchen.garagescript.org/newchat?message='+val)
        document.getElementsByClassName('chat__input')[0].value = '';
      };

      document.getElementsByClassName('chat__submitButton')[0].onclick = submit;
      document.getElementsByClassName('chat__input')[0].onkeyup = (key) => {
        if (key.keyCode === 13) submit();
      };

      setInterval( () => {
        fetch('https://badchen.garagescript.org/allchats')
          .then(r => r.json()).then(r => {
            const chatData = r.map(m => '<p>' +m + '</p>').join('');
            document.getElementsByClassName('chatData')[0].innerHTML = chatData;
          });
      },1000);

    </script>
    <style>
      h1 {
        color: green;
        background-color: red;
        text-align: center;
      }
      .chat__submitButton {
        background-color: yellow;
      }
    </style>
  `);
});

app.listen(5286);
