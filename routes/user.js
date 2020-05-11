const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const router = express.Router();

const user = require('../models/userModel');
const event = require('../models/eventModel');
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
                if (error.code === 11000) return res.status(500).json({
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

    router.post('/getAll', (req, res) => {
        user.find({})
            .then((data) => {
                return res.json({ msg: 'All users successfully gathered', data: data });
            })
            .catch((error) => {
                return res.status(500).send(error);
            });
    });

    router.post('/login', (req, res) => {
        const data = req.body;

        user.find(data)
            .then((user) => {
                return res.json({msg: 'User logged in', data: user[0]});
            })
            .catch((error) => {
                console.log(error);
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
                return res.json({msg: 'Got users', data: data});
            })
            .catch((error) => {
                return res.status(500).send(error);
            });

    });

    router.post('/getFollowers', (req, res) => {
        const sess = req.session;

        user.find({mail: sess.mail})
            .then((data) => {
                return res.json({msg: 'Got all user you\'re following', data: data[0].following});
            })
            .catch((error) => {
                return res.status(500).send(error);
            });
    });
}

// CRUD: Update
{
    router.post('/updateById', (req, res) => {
        const data = req.body;

        user.findByIdAndUpdate(data._id, { $set: data })
            .then((data) => {
                return res.json({msg: 'User updated', data: data});
            })
            .catch((error) => {
                return res.status(500).send(error);
            });
    })

    router.post('/follow', (req, res) => {
        const data = req.body;

        user.findOneAndUpdate({mail: data.user1.mail}, { $push: {following: data.user2._id } })
            .then((usr) => {
                return res.json({msg: 'User follows updated', data: usr});
            })
            .catch((error) => {
                return res.status(500).send(error);
            });
    })

    router.post('/unfollow', (req, res) => {
        const data = req.body;

        user.findOneAndUpdate({mail: data.user1.mail}, { $pull: {following: data.user2._id } })
            .then((usr) => {
                return res.json({msg: 'User follows updated', data: usr});
            })
            .catch((error) => {
                return res.status(500).send(error);
            });
    })


}

module.exports = router;
