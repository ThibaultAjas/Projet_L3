const express = require('express');

const router = express.Router();

const user = require('../models/user');
const event = require('../models/event');
const comment = require('../models/comment');

// [...]

// TODO: CRUD user

module.exports = router;
