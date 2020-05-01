const express = require('express');

const router = express.Router();

const user = require('../models/user');
const event = require('../models/event');
const comment = require('../models/comment');

// Routes
// router.post('/save', (req, res) => {
//     console.log('body: ', req.body);
//     const data = req.body;
//
//     data.password = 'test';
//     console.log('Data: ', data);
//
//     const newUser = new user(data);
//
//     //.save
//     newUser.save((error) => {
//         if (error) {
//             res.status(500).json({msg: 'Sorry, internal server error'});
//             return
//         }
//
//         // user
//         return res.json({ // status 200
//             msg: 'Your data has been saved !'
//         });
//     });
// });

router.get('/', (req, res) => {
    return res.status(404).json({msg: 'T\'as rien à foutre ici, tire-toi'});
});

module.exports = router;