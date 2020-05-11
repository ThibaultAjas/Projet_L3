const express = require('express');
const mongoose = require('mongoose');

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

    router.post('/is_dis_likedByUser', (req, res) => {
        const data = req.body;

        event.findOne(data.event)
            .then(evt => {
                switch (data.action) {
                    case 'like':
                        return res.json({msg:'', data: evt.usersWhoLiked.find(e => e.toString() === data.user._id.toString()) !== undefined});
                    case 'dislike':
                        return res.json({msg:'', data: evt.usersWhoDisliked.find(e => e.toString() === data.user._id.toString()) !== undefined});
                    default:
                        return res.json({msg:'', data: false});
                }
            })
            .catch((error) => {
                console.log(error)
                return res.status(500).send(error);
            });
    })

    router.post('/getAllForUser', (req, res) => {
       const data = req.body;

        const evts = data.events;

        let idEvtList = [];
        evts.forEach((e) => {
            console.log(e)
            idEvtList.push({_id: e.event});
        })

        event.find({ $or: idEvtList })
            .then((evtList) => {
                return res.json({msg: 'Got all events from user', data: evtList});
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
                                                evtIDsFromFollowing.push(evt);
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

    router.post('/likeEvent', (req, res) => {
        const data = req.body;
        const usr = data.user;

        event.findOne({usersWhoLiked: usr})
            .then(evt => {
                if (evt) {
                    event.findOneAndUpdate({_id: data.event._id}, {$pull: {usersWhoLiked: usr._id}}, {new: true})
                        .then((evt) => {
                            return res.json({msg: '', data: evt})
                        })
                        .catch((error) => {
                            return res.status(500).send(error);
                        });
                }
                else {
                    event.findOneAndUpdate({_id: data.event._id}, {$addToSet: {usersWhoLiked: usr}}, {new: true})
                        .then((evt) => {
                            return res.json({msg: '', data: evt});
                        })
                        .catch((error) => {
                            return res.status(500).send(error);
                        });
                }
            })
            .catch(error => {
                console.log('Err: ', error)
            })
    });

    router.post('/dislikeEvent', (req, res) => {
        const data = req.body;
        const usr = data.user;

        event.findOne({usersWhoDisliked: usr})
            .then(evt => {
                if (evt) {
                    event.findOneAndUpdate({_id: data.event._id}, {$pull: {usersWhoDisliked: usr._id}}, {new: true})
                        .then((evt) => {
                            return res.json({msg: '', data: evt})
                        })
                        .catch((error) => {
                            return res.status(500).send(error);
                        });
                }
                else {
                    event.findOneAndUpdate({_id: data.event._id}, {$addToSet: {usersWhoDisliked: usr}}, {new: true})
                        .then((evt) => {
                            return res.json({msg: '', data: evt});
                        })
                        .catch((error) => {
                            return res.status(500).send(error);
                        });
                }
            })
            .catch(error => {
                console.log('Err: ', error)
            })
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
