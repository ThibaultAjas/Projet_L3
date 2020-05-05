const express = require('express');

const router = express.Router();

const user = require('../models/user');
const event = require('../models/event');
// const comment = require('../models/comment');

// TODO: improve methods, but we have the base

// CRUD: Create
{
    router.post('/addOne', (req, res) => {
        const data = req.body;
        const newEvent = new event(data);

        newEvent.save((error) => {
            if (error) return res.status(500).json({msg: 'Sorry, internal server error'});

            return res.json({ msg: 'Your data has been saved !' }); // status 200
        });
    });
}

// CRUD: Read
{
    router.post('/getAll', (req, res) => {
        event.find({})
            .then((data) => {
                return res.json({ msg: 'All events successfully gathered', data: data });
            })
            .catch((error) => {
                return res.status(500).send(error);
            });
    });

    router.post('/getOne', (req, res) => {
        const data = event.body;

        event.find(data)
            .then((data) => {
                return res.json(data);
            })
            .catch((error) => {
                return res.status(500).send(error);
            });
    });

    router.post('/getAllForUser', (req, res) => {
       const data = req.body;
       const userMail = data.mail;

       event.find({mail: userMail})
           .then((data) => {
               return res.json(data);
           })
           .catch((error) => {
               return res.status(500).send(error);
           });
    });

    router.post('/getAllFromFollowing', (req, res) => {
        const data = req.body;
        const userToFind = new user({mail: data.mail});

        event.find({})
            .then((events) => {
                user.find(userToFind)
                    .then((data) => {
                        const following = data[0].following;

                        let evtsFromFollowing = [];

                        following.forEach((elemUser) => {
                            let evtsFromElem = [];
                            events.forEach((elemEvt) => {
                                if (elemUser.events.id === elemEvt._id) {

                                }
                            });
                            evtsFromFollowing = [...evtsFromFollowing, ...evtsFromElem];
                        });

                    })
                    .catch((error) => {
                        return res.status(500).send(error);
                    });
            });
    });
}

// CRUD: Update
{
    router.post('/updateOne', (req, res) => {
        const data = req.body;

        const filter = data.filter;
        const upd = data.upd;

        const evt = new event(filter);

        evt.findOneAndUpdate(filter, upd, { new: true }, (err, doc) => {
            if (err) return res.status(500).send(err);
            else return res.json(doc);
        });
    });
}

// CRUD: Delete
{
    router.post('/delete', (req, res) => {
       const data = req.body;

        const filter = data.filter;
        const del = data.del;

        const evt = new event(filter);

        evt.findOneAndDelete(filter, del, (err, docId) => {
            if (err) return res.status(500).send(err);
            else return res.json({ msg: 'Event successfully deleted', id: docId._id });
        });
    });
}

module.exports = router;
