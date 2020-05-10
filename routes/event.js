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

        console.log(data)
        console.log(newEvent)

        newEvent.save()
            .then((evt) => {
                user.findOneAndUpdate({mail: data.user.mail}, {
                    $push: {
                        events: {event: evt, own: true}
                    }
                })
                    .then((oui) => {
                        console.log(evt._id)
                        return res.json({ msg: 'Your data has been saved !', data: oui}); // status 200
                    })
                    .catch((error) => {
                        console.log('ici', error)
                        return res.status(500).send(error);
                    });
            })
            .catch((error) => {
                console.log('là')
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

        user.findById(data._id)
            .then((usr) => {
                const evts = usr.events;
                console.log('current events ids: ', evts);

                event.find({ $or: evts })
                    .then((evtList) => {
                        //TODO chepas ce que tu as branlé mais ça renvoies pas les events ça
                        console.log('current list of events: ', evtList);
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
                    .then((users) => {
                        if (users.length !== 0) {
                            user.find({ $or: [{_id: users[0].following}]})
                                .then((following) => {
                                    let evtsFromFollowing = [];
                                    let evtIDsFromFollowing = [];
                                    following.forEach((elemUser) => {
                                        if (elemUser.events.length !== 0) {
                                            elemUser.events.forEach((evt) => {
                                                evtIDsFromFollowing.push(evt.event);
                                            });
                                        }
                                    });
                                    events.forEach((evt) => {
                                        const tmp = evtIDsFromFollowing.find((elem) => {
                                            return elem._id.toString() === evt._id.toString();
                                        });
                                        if (tmp) evtsFromFollowing.push(evt);
                                    })
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
