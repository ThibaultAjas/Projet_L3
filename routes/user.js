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
        console.log('yolo');
        const data = req.body;
        const usr = new user(data);

        usr.save((error) => {

            if (error) {
                if (error.code = 11000) return res.status(500).json({
                    msg: 'Sorry, internal server error',
                    error: 'Mail already registered'
                });
                return res.status(500).json({msg: 'Sorry, internal server error', error: 'Unknown'});
            }

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

                return res.json({msg: 'User logged in', user: data[0]});
            })
            .catch((error) => {
                return res.status(500).send(error);
            });
    });

    router.post('/getAllByIds', (req, res) => {
        const data = req.body;
        const params = [];

        for (let i = 0; i < data.length; i++) {
            params.push({ _id: data[i] })
        }

        user.find({$or: params})
            .then((data) => {
                return res.json({msg: 'Got users', users: data});
            })
            .catch((error) => {
                return res.status(500).send(error);
            });

    });

    router.post('/getFollowers', (req, res) => {
        const sess = req.session;

        user.find({mail: sess.mail})
            .then((data) => {
                return res.json(data[0].followers);
            })
            .catch((error) => {
                return res.status(500).send(error);
            });
    });
}

{
}

module.exports = router;
