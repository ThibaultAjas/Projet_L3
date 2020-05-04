const mongoose = require('mongoose');

// Define Event schema
const Schema = mongoose.Schema;
let eventSchema = new Schema({
    location: [{
        latitude: Number,
        longitude: Number
    }],
    country: String,
    city: String,
    date: Date,
    dateAdded: Date,
    title: String,
    description: String,
    comments: Array
});

// Export Mongoose model
module.exports = mongoose.model('event', eventSchema);