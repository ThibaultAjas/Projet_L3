const express = require('express');

const router = express.Router();

const user = require('../models/user');
const event = require('../models/event');
const comment = require('../models/comment');

// TODO: improve methods, but we have the base

// CRUD: Create
{
    router.post('/addOne', (req, res) => {
        const data = req.body;
        const newEvent = new event(data);

        //.save
        newEvent.save((error) => {
            if (error) return res.status(500).json({msg: 'Sorry, internal server error'});

            // user
            return res.json({ // status 200
                msg: 'Your data has been saved !'
            });
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
