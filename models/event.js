const mongoose = require('mongoose');

// Define Event schema
const Schema = mongoose.Schema;
let eventSchema = new Schema({
    xpos: String,
    ypos: String,
    date: Date,
    title: String,
    description: String,
    comments: Array
});

// Export Mongoose model
module.exports = mongoose.model('event', eventSchema);