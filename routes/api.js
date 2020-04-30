const express = require('express');

const router = express.Router();

const user = require('../models/user');
const event = require('../models/event');
const comment = require('../models/comment');

// Routes
router.get('/', (req, res) => {
    user.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
});

router.post('/save', (req, res) => {
    console.log('body: ', req.body);
    const data = req.body;

    data.password = 'test';
    console.log('Data: ', data);

    const newUser = new user(data);

    //.save
    newUser.save((error) => {
        if (error) {
            res.status(500).json({msg: 'Sorry, internal server error'});
            return
        }

        // user
        return res.json({ // status 200
            msg: 'Your data has been saved !'
        });
    });
});

module.exports = router;