const mongoose = require('mongoose');

// Define User schema
const Schema = mongoose.Schema;
let userSchema = new Schema({
    isAdmin: false,
    mail: {type: String, unique: true, required: true},
    firstName: String,
    lastName: String,
    userName: String,
    password: {type: String, required: true},
    address: String,
    city: String,
    country: String,
    phone: String,
    config: Array,
    following: [{type: mongoose.Schema.Types.ObjectID, ref: 'user'}],
    events: [{
        event: {type: mongoose.Schema.Types.ObjectID, ref: 'event'},
        own: false,
        liked: false,
        disliked: false
    }]
});

// Export Mongoose model
module.exports = mongoose.model('user', userSchema);;