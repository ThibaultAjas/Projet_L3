const mongoose = require('mongoose');

// Define Event schema
const Schema = mongoose.Schema;
let eventSchema = new Schema({
    location: {
        latitude: Number,
        longitude: Number
    },
    country: String,
    city: String,
    date: Date,
    dateAdded: Date,
    title: String,
    description: String,
    comments: [{type: mongoose.Schema.Types.ObjectID, ref: 'comment'}],
    usersWhoLiked: [{type: mongoose.Schema.Types.ObjectID, ref: 'user'}],
    usersWhoDisliked: [{type: mongoose.Schema.Types.ObjectID, ref: 'user'}],
    likes: Number,
    dislikes: Number
});

// Export Mongoose model
module.exports = mongoose.model('event', eventSchema);