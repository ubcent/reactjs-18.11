const express = require('express');
const routerChat = express.Router();
const Route = require('../models/Chat');

routerChat.get('/', async (req, res) => {
    const chats = await Route.find({});
    res.status(200).send(chats);
});

routerChat.get('/:id', async (req, res) => {
    const chat = await Route.findById(req.params.id);
    res.status(200).send(chat);
});

routerChat.post('/', async (req, res) => {
    let chat = new Route(req.body);
    chat = await chat.save();
    res.status(201).send(chat);
});

routerChat.put('/:id', async (req, res) => {
    let chat = await Route.findByIdAndUpdate(req.params.id, { $set: req.body });
    chat = await Route.findById(req.params.id);
    res.status(200).send(chat);
});

routerChat.delete('/:id', async (req, res) => {
    const chat = await Route.findByIdAndDelete(req.params.id);
    res.status(200).send(chat);
});

module.exports = routerChat;