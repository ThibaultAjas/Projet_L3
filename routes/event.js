const express = require('express');

const router = express.Router();

const user = require('../models/user');
const event = require('../models/event');
const comment = require('../models/comment');

// [...]

router.post('/getAll', (req, res) => {
    event.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
});

router.post('/addOne', (req, res) => {
    const data = req.body;
    const newEvent = new event(data);

    //.save
    newEvent.save((error) => {
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

router.post('/getOne', (req, res) => {
    const data = event.body;

    event.find(data)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
});

module.exports = router;
