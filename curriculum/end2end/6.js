// Create an express server that sends back <h1>, <input>, and <button> tag.
// When you visit url/chat. When you click on the button tag, send the
// request to server (JavaScript) using fetch. Page should auto update
// chat messages every 1 second.
const express = require('express');
const app = express();

const messages = [];

app.get('/newchat', (req,res) => {
  messages.unshift(req.query.message);
  res.json(messages);
});

app.get('/allchats', (req,res) => {
  res.json(messages);
});

app.get('/chat', (req,res) => {
  const chatData = messages.map(m => `<p>${m}</p>`).join('');
  res.send(`
    <h1>My Chat</h1>
    <input type="text" class="chat__input" />
    <button type="submit" class="chat__submitButton">sumbit</button>
    <div class="chatData">
      ${chatData}
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
