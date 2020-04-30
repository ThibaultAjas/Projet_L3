const mongoose = require('mongoose');

// Define User schema
const Schema = mongoose.Schema;
let userSchema = new Schema({
    isAdmin: false,
    mail: {type: String, unique: true, required: true},
    firstName: String,
    lastName: String,
    password: {type: String, required: true},
    config: Array,
    friends: Array,
    events: Array
});

// Export Mongoose model
module.exports = mongoose.model('user', userSchema);