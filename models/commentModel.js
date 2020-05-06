const mongoose = require('mongoose');

// Define Comment schema
const Schema = mongoose.Schema;
let commentSchema = new Schema({
    description: String,
    date: Date,
    replies: Array,
    likes: Array
});

// Export Mongoose model
module.exports = mongoose.model('comment', commentSchema);