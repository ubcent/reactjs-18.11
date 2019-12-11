const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const port = process.env.PORT || config.port;
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

const { routerChat } = require('./routes');

app.use(bodyParser.json());
app.use(cors());

app.use('/chats', routerChat);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('new chat', (body) => {
      chats.insert({...body, messages: []}, (err, newDoc) => {
        socket.broadcast.emit('new chat', newDoc);
        socket.emit('new chat', newDoc);
      });
    });

    socket.on('chat message', (body) => {
      const { chatId, ...message } = body;
      chats.update({ _id: chatId }, { $push: { messages: message } }, {}, () => {
        socket.broadcast.emit('chat message', body);
        socket.emit('chat message', body);

        setTimeout(() => {
          const botMessage = { chatId, author: 'Bot', text: `Привет, ${body.author}! Бот на связи!` };
          chats.update({ _id: chatId }, { $push: { messages: botMessage } }, {}, () => {
            socket.broadcast.emit('chat message', botMessage);
            socket.emit('chat message', botMessage);
          });
        }, 5000);
      });
    });
  });

app.listen(port, () => {
    console.log(`Server has been started on port ${config.port}`);
});