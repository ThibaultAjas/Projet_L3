const mongoose = require('mongoose');
const event = require('event');

// Define User schema
const Schema = mongoose.Schema;
let userSchema = new Schema({
    isAdmin: false,
    mail: {type: String, unique: true, required: true},
    firstName: String,
    lastName: String,
    pseudonym: String,
    password: {type: String, required: true},
    address: String,
    config: Array,
    following: [user],
    events: [{
        event: event,
        liked: false,
        disliked: false
    }]
});
const user = mongoose.model('user', userSchema);

// Export Mongoose model
module.exports = user;