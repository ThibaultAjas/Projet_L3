const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const router = express.Router();

const user = require('../models/user');
const event = require('../models/event');
const comment = require('../models/comment');

// Routes
/*router.post('/save', (req, res) => {
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
});*/

router.post('/login', (req, res) => {
    const sess = req.session;

    if (sess.mail) return res.json({logged: true, msg: 'Unauthorized'}); // TODO: à changer
    res.json({logged: false, msg: 'Authorized'});
});

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    });

});

router.post('/stats', (req, res) => {
    const dataIn = req.body;

    let dataOut = {};

    let comments = [];
    let users = [];
    let events = [];

    comment.find({})
        .then((data) => {
            comments = data;
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });

    user.find({})
        .then((data) => {
            users = data;
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });

    event.find({})
        .then((data) => {
            events = data;
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });

    dataOut.numberOfUsers = users.length;

    dataOut.countries = [];
    dataOut.cities = [];
    dataOut.numberOfEventsByCountry = [];
    dataOut.numberOfEventsByCity = [];

    events.forEach(evt => {
        let index;
        if ((index = dataOut.countries.findIndex(evt.country)) === -1) { // On a pas trouvé
            dataOut.countries.push(evt.country);
            dataOut.numberOfEventsByCountry.push(1);
        } else {
            dataOut.numberOfEventsByCountry[index]++;
        }
        if ((index = dataOut.cities.findIndex(evt.city)) === -1) { // On a pas trouvé
            dataOut.cities.push(evt.city);
            dataOut.numberOfEventsByCity.push(1);
        } else {
            dataOut.numberOfEventsByCity[index]++;
        }
    });

    dataOut.usersByFollowers = users.sort((a, b) => a.followers.length - b.followers.length);

    // TODO: somme des likes par comment d'un user

    // TODO: Plus de stats

    res.json(dataOut);
});

module.exports = router;