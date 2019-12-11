const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Описывается структура коллекции chats
const chatSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  messages: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Chat', chatSchema, 'chats');