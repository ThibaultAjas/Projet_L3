const express = require('express');

const router = express.Router();

// const user = require('../models/user');
// const event = require('../models/event');
const comment = require('../models/commentModel');

// [...]

router.post('/getAll', (req, res) => {
    comment.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
});

// TODO: CRUD comment

module.exports = router;
