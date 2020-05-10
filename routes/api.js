const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const router = express.Router();

const user = require('../models/userModel');
const event = require('../models/eventModel');
const comment = require('../models/commentModel');

// Util

const asyncMiddleware = fn =>
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(next);
    };

// Router methods

router.post('/verify', (req, res) => {
    const sess = req.session;

    if (sess.mail) return res.json({mail: sess.mail, logged: true, msg: 'Authorized'});
    res.json({mail: undefined, logged: false, msg: 'Unauthorized'});
});

router.post('/login', (req, res) => {
    const sess = req.session;
    const data = req.body;

    return sess.mail = data.mail;
});

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Session destroyed');
        res.redirect('/');
    });
});

router.post('/stats', asyncMiddleware(async (req, res, next) => {
    const dataIn = req.body;

    let dataOut = {};

    let comments = [];
    let users = [];
    let events = [];

    await comment.find({})
        .then((data) => {
            comments = data;
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });

    await user.find({})
        .then((data) => {
            users = data;
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });

    await event.find({})
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
        if ((index = dataOut.countries.findIndex((e) => e === evt.country)) === -1) { // On a pas trouvé$
            dataOut.countries.push(evt.country);
            dataOut.numberOfEventsByCountry.push(1);
        } else {
            dataOut.numberOfEventsByCountry[index]++;
        }
        if ((index = dataOut.cities.findIndex((e) => e === evt.city)) === -1) { // On a pas trouvé
            dataOut.cities.push(evt.city);
            dataOut.numberOfEventsByCity.push(1);
        } else {
            dataOut.numberOfEventsByCity[index]++;
        }
    });


    // TODO: somme des likes par comment d'un user

    // TODO: Plus de stats

    console.log(dataOut);
    return res.json({msg: 'Got some stats', data: dataOut});
}));

module.exports = router;