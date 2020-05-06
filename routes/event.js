const express = require('express');

const router = express.Router();

const user = require('../models/userModel');
const event = require('../models/eventModel');
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

        event.find({})
            .then((events) => {
                user.find({mail: data.mail})
                    .then((data) => {
                        user.find({ $or: [{_id: data[0].following}]})
                            .then((following) => {
                                let evtsFromFollowing = [];
                                following.forEach((elemUser) => {
                                    if (elemUser.events.length !== 0) {
                                        elemUser.events.forEach((evt) => {
                                            evtsFromFollowing.push(events.find(e => e._id = evt._id));
                                        });
                                    }
                                });
                                return res.json({msg: 'Got events', events: evtsFromFollowing});
                            });

                    });
            })
            .catch((error) => {
                return res.status(500).send(error);
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
