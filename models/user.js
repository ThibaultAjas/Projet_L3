const mongoose = require('mongoose');

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
    followers: [{
        mail: String,
        pseudo: String
    }],
    events: [{
        location: [{
            xpos: Number,
            ypos: Number
        }],
        date: Date,
        title: String
    }]
});

// Export Mongoose model
module.exports = mongoose.model('user', userSchema);