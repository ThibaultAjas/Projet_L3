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
        const newEvent = new event(data.event);

        newEvent.save()
            .then((evt) => {
                user.findOneAndUpdate({mail: data.user.mail}, { $push: { events: {evt}}}, {new: true})
                    .then((oui) => {
                        return res.json({ msg: 'Your data has been saved !', data: oui}); // status 200
                    })
                    .catch((error) => {
                        return res.status(500).send(error);
                    });
            })
            .catch((error) => {
                return res.status(500).send(error);
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
                return res.json({msg: 'Got event', data: data});
            })
            .catch((error) => {
                return res.status(500).send(error);
            });
    });

    router.post('/getAllForUser', (req, res) => {
       const data = req.body;

       // event.find({mail: userMail})
       //     .then((data) => {
       //         return res.json({msg: 'Got all events for this user', data: data});
       //     })
       //     .catch((error) => {
       //         return res.status(500).send(error);
       //     });

        user.findById(data.id)
            .then((usr) => {
                const evts = usr.events;
                event.find({ $or: evts })
                    .then((evtList) => {
                        return res.json({msg: 'Got all events from user', data: evtList});
                    })
                    .catch((error) => {
                        return res.status(500).send(error);
                    });
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
                        console.log('data', data)
                        if (data.length !== 0) {
                            user.find({ $or: [{_id: data[0].following}]})
                                .then((following) => {
                                    let evtsFromFollowing = [];
                                    following.forEach((elemUser) => {
                                        if (elemUser.events.length !== 0) {
                                            elemUser.events.forEach((evt) => {

                                                console.log('Evt: ', evt);

                                                // evtsFromFollowing.push(events.find(e => {
                                                //     console.log('ID Event: ', evt._id);
                                                //     console.log('ID Temp : ', e._id);
                                                //     console.log('\t', e._id === evt._id)
                                                //     return e._id === evt._id
                                                // }));
                                                // console.log('ID Event: ', evt._id);
                                            });
                                        }
                                    });
                                    // console.log('Events: ', evtsFromFollowing);
                                    return res.json({msg: 'Got events', data: evtsFromFollowing});
                                })
                                .catch((error) => {
                                    return res.status(500).send(error);
                                });
                        }
                    })
                    .catch((error) => {
                        return res.status(500).send(error);
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

        evt.findOneAndUpdate(filter, upd, { new: true })
            .then((data) => {
                return res.json({msg: 'Event updated', data: data});
            })
            .catch((error) => {
                return res.status(500).send(error);
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
