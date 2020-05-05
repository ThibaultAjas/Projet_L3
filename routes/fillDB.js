const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://website:ciP7w6ibT8ab3bZm@cluster-l3project-nyvoc.mongodb.net/website?retryWrites=true&w=majority';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(MONGODB_URI, {useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
    fillDB();
});

const fillDB = () => {

}
