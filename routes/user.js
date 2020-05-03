const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const router = express.Router();

const user = require('../models/user');
// const event = require('../models/event');
// const comment = require('../models/comment');

// [...]

// TODO: CRUD user

// CRUD: Create
{
    router.post('/register', (req, res) => {
        const data = req.body;
        const usr = new user(data);

        usr.save((error) => {
            if (error) return res.status(500).json({msg: 'Sorry, internal server error'});

            return res.json({msg: 'User successfully registered'});
        });

    });
}

// CRUD: Read
{
    router.post('/login', (req, res) => {
        const data = req.body;

        user.find(data)
            .then((data) => {
                const sess = req.session;
                sess.mail = data[0].mail;

                return res.json({msg: 'User logged in'});
            })
            .catch((error) => {
                return res.status(500).send(error);
            });
    });
}

module.exports = router;
