const mongoose = require('mongoose');
const comment = require('comment');

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
    comments: [comment],
    likes: Number,
    dislikes: Number
});

// Export Mongoose model
module.exports = mongoose.model('event', eventSchema);