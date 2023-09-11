const express = require('express');
const router = express.Router();

const messages = [
    {
        text: "Hola Amigos!",
        user: "Armando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

// Index Page
router.get('/', (req, res) => {
    res.render('index.ejs', {
        title: "Mini Messageboard",
        messages: messages
    });
});

router.post('/form', (req, res, next) => {
    messages.push({text: req.body.message, user: req.body.name, added: new Date()});
    res.redirect('/');
});

module.exports = router