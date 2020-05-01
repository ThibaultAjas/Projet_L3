const express = require('express');

const router = express.Router();

const user = require('../models/user');
const event = require('../models/event');
const comment = require('../models/comment');

// [...]

router.get('/getAll', (req, res) => {
    event.find({  })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
});


module.exports = router;
