const faker = require('faker');
const mongoose = require('mongoose');

const user = require('./models/userModel');
const event = require('./models/eventModel');

const [MAX_USERS, MAX_EVENTS] = [100, 1000];
const MONGODB_URI = 'mongodb+srv://website:ciP7w6ibT8ab3bZm@cluster-l3project-nyvoc.mongodb.net/website_test?retryWrites=true&w=majority';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(MONGODB_URI, {useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
    fillDB().then(() => {
        console.log('Script successfully ended !');
        mongoose.disconnect();
    });
});


faker.toLocaleString = 'fr';

const fillDB = async () => {
    await mongoose.connection.collection('users').drop((err) => console.log('User collection dropped'));
    await mongoose.connection.collection('events').drop((err) => console.log('User event dropped'));
    // await mongoose.connection.collection('comments').drop((err) => console.log('User comment dropped'));

    let users = [];
    for (let i = 0; i < MAX_USERS; i++) {
        const card = faker.helpers.createCard();

        users.push(new user({
            isAdmin: false,
            mail: card.email,
            password: faker.random.word(),
            firstName: card.name.split(' ')[0],
            lastName: card.name.split(' ')[1],
            userName: card.username,
            country: card.address.country,
            city: card.address.city,
            zipCode: card.address.zipcode,
            address: card.address.streetC,
            phone: card.phone
        }));
    }
    console.log('List of users generated');

    let events = [];
    for (let i = 0; i < MAX_EVENTS; i++) {
        const randomInt = Math.floor((Math.random() * MAX_USERS));
        const card = faker.helpers.createCard();

        let uwl_s = new Set();
        let uwl = [];
        const len = Math.floor((Math.random() * 24));
        while (uwl_s.size < MAX_USERS / 10 + len) {
            let rand = Math.floor((Math.random() * MAX_USERS));
            uwl_s.add(users[rand]);
        }
        uwl_s.forEach(e => uwl.push(e));

        events.push(new event({
            location: {
                latitude: card.address.geo.lat,
                longitude: card.address.geo.lng
            },
            creator: users[randomInt],
            country: card.address.country,
            city: card.address.city,
            date: card.accountHistory.date,
            dateAdded: new Date(),
            title: card.posts[0].words[0],
            description: card.posts[0].words[0],
            usersWhoLiked: uwl
        }));
    }
    console.log('List of events generated');

    for (const usr of users) await usr.save();
    console.log('Collection users saved');
    for (const evt of events) await evt.save();
    console.log('Collection events saved');

    console.log('Database successfully randomly filled !');
};
