const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'mongodb+srv://website:ciP7w6ibT8ab3bZm@cluster-l3project-nyvoc.mongodb.net/website_test?retryWrites=true&w=majority';

const apiRoute = require('./routes/api');
const userRoute = require('./routes/user');
const eventRoute = require('./routes/event');
const commentRoute = require('./routes/comment');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(MONGODB_URI, {useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Sessions
app.use(cookieParser());
app.use(session({cookie: { path: '/', httpOnly: true, maxAge: null}, resave: true, saveUninitialized: true, secret:'secret'})); // TODO: Changer le 'secret'

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', apiRoute)
    .use('/user', userRoute)
    .use('/event', eventRoute)
    .use('/comment', commentRoute);


app.listen(PORT, console.log(`Server is starting at port ${PORT}`));
