const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://website:ciP7w6ibT8ab3bZm@cluster-l3project-nyvoc.mongodb.net/website?retryWrites=true&w=majority';

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

const fillDB = async () => {
    const user = require('./models/user');
    const event = require('./models/event');
    const comment = require('./models/comment');

    await mongoose.connection.collection('users').drop((err) => console.log('User collection dropped'));
    await mongoose.connection.collection('events').drop((err) => console.log('User event dropped'));
    await mongoose.connection.collection('comments').drop((err) => console.log('User comment dropped'));

    const userList = [
        new user({
            mail: 'test@gmail.com',
            password: 'test',
            isAdmin: true,
            firstName: 'Test',
            lastName: 'TEST',
            country: 'france',
            city: 'Toulouse',
            pseudonym: 'Agnubushklufu'
        }),
        new user({
            mail: 'test1@gmail.com',
            password: 'test1',
            isAdmin: false,
            firstName: 'Test1',
            lastName: 'TEST',
            country: 'france',
            city: 'Toulouse',
            pseudonym: 'Agnubushklufu_1'
        }),
        new user({
            mail: 'test2@gmail.com',
            password: 'test2',
            isAdmin: false,
            firstName: 'Test2',
            lastName: 'TEST',
            country: 'france',
            city: 'Toulouse',
            pseudonym: 'Agnubushklufu_2'
        }),
        new user({
            mail: 'test3@gmail.com',
            password: 'test3',
            isAdmin: false,
            firstName: 'Test3',
            lastName: 'TEST',
            country: 'france',
            city: 'Toulouse',
            pseudonym: 'Agnubushklufu_3'
        }),
        new user({
            mail: 'test4@gmail.com',
            password: 'test4',
            isAdmin: false,
            firstName: 'Test4',
            lastName: 'TEST',
            country: 'france',
            city: 'Toulouse',
            pseudonym: 'Agnubushklufu_4'
        }),
        new user({
            mail: 'test5@gmail.com',
            password: 'test5',
            isAdmin: false,
            firstName: 'Test5',
            lastName: 'TEST',
            country: 'france',
            city: 'Toulouse',
            pseudonym: 'Agnubushklufu_5'
        }),
        new user({
            mail: 'test6@gmail.com',
            password: 'test6',
            isAdmin: false,
            firstName: 'Test6',
            lastName: 'TEST',
            country: 'france',
            city: 'Toulouse',
            pseudonym: 'Agnubushklufu_6'
        }),
        new user({
            mail: 'test7@gmail.com',
            password: 'test7',
            isAdmin: false,
            firstName: 'Test7',
            lastName: 'TEST',
            country: 'france',
            city: 'Toulouse',
            pseudonym: 'Agnubushklufu_7'
        }),
        new user({
            mail: 'test8@gmail.com',
            password: 'test8',
            isAdmin: false,
            firstName: 'Test8',
            lastName: 'TEST',
            country: 'france',
            city: 'Toulouse',
            pseudonym: 'Agnubushklufu_8'
        }),
        new user({
            mail: "ribeyrolles.matthieu@gmail.com",
            password: "t{{^]$D/y6tEvxIs",
            firstName: "Matthieu",
            lastName: "Ribeyrolles",
            address: "12 allée des champs"
        })
    ];
    const eventList = [
        new event({
            location: {
                latitude: 43.6047,
                longitude: 1.4442
            },
            country: 'France',
            city: 'Toulouse',
            date: new Date(),
            dateAdded: new Date(),
            title: 'Event 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia quam id quam tempus egestas. Sed semper mauris mauris, eget cursus augue fermentum quis. Duis non vestibulum metus. Donec molestie accumsan nulla, quis bibendum justo tempor ac. Sed blandit, nibh vitae porta aliquam, urna augue condimentum nibh, at porttitor dolor justo sed purus. Donec aliquet ornare dui. Pellentesque tincidunt vestibulum lorem a lobortis. Maecenas tempor orci a metus interdum, vitae maximus mauris sodales. Curabitur tellus mauris, finibus ut erat quis, tincidunt consectetur velit. Vivamus sed massa et eros condimentum dictum ac at urna. Suspendisse id sapien ultricies, elementum purus non, dignissim lorem. Phasellus commodo fringilla lorem, eu accumsan neque. Mauris volutpat odio id nisl accumsan consequat. Vestibulum tempor sodales lorem, at tincidunt augue feugiat et. Morbi placerat turpis a nisl malesuada tempor. Ut sed rutrum tortor, id placerat mi',
            likes: 0,
            dislikes: 0
        }),
        new event({
            location: {
                latitude: 43.6047,
                longitude: 1.4442
            },
            country: 'France',
            city: 'Toulouse',
            date: new Date(),
            dateAdded: new Date(),
            title: 'Event 2',
            description: 'Quisque sapien erat, hendrerit id aliquet quis, semper eget justo. Ut quis feugiat eros. Vestibulum venenatis felis magna, id consequat ex pharetra commodo. Vestibulum ornare vulputate iaculis. Aliquam vitae urna iaculis, tempus ante eget, facilisis enim. Fusce at lacus vel neque cursus venenatis et in tellus. Mauris condimentum ligula non est suscipit, quis maximus turpis aliquam. Pellentesque turpis odio, dapibus sed consequat id, consectetur sit amet ex. Curabitur bibendum augue eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In molestie a mauris in faucibus. Proin pharetra augue eu ullamcorper tincidunt.',
            likes: 0,
            dislikes: 0
        }),
        new event({
            location: {
                latitude: 43.6047,
                longitude: 1.4442
            },
            country: 'France',
            city: 'Toulouse',
            date: new Date(),
            dateAdded: new Date(),
            title: 'Event 3',
            description: 'Integer semper mollis arcu. Cras dictum justo at ligula rutrum gravida. Etiam et mauris bibendum, consequat felis vitae, pellentesque ipsum. Quisque at sem sit amet ante cursus gravida. Donec bibendum tincidunt sapien eget facilisis. Curabitur quis varius metus. Quisque ultricies dignissim leo in luctus. Praesent sagittis, sapien pretium luctus consectetur, arcu ipsum porta eros, a ornare nunc orci et lacus.',
            likes: 0,
            dislikes: 0
        }),
        new event({
            location: {
                latitude: 43.6047,
                longitude: 1.4442
            },
            country: 'France',
            city: 'Toulouse',
            date: new Date(),
            dateAdded: new Date(),
            title: 'Event 4',
            description: 'Sed blandit ex sapien, in elementum odio molestie id. Nunc auctor, mauris vel eleifend efficitur, lacus diam laoreet purus, ac pretium erat magna et erat. Fusce interdum nisi nec ultrices pulvinar. Nunc convallis purus et metus ornare, ac cursus libero gravida. Proin mollis in velit nec vulputate. Sed porta ante vitae accumsan egestas. Aenean massa enim, egestas eget nulla quis, pellentesque placerat ipsum. Nullam varius mollis sem, sed fermentum mi accumsan sed. Mauris ut tellus nec dolor egestas iaculis. Vestibulum mattis diam vel orci auctor volutpat. Mauris placerat et sapien at euismod. Sed est dui, imperdiet quis lectus vel, sodales pretium metus. In finibus mollis mauris, sit amet porttitor purus interdum at. Aliquam sit amet vehicula ipsum, vel mattis libero. Praesent pulvinar ex erat, non posuere felis viverra ac.',
            likes: 0,
            dislikes: 0
        }),
        new event({
            location: {
                latitude: 43.6047,
                longitude: 1.4442
            },
            country: 'France',
            city: 'Toulouse',
            date: new Date(),
            dateAdded: new Date(),
            title: 'Event 5',
            description: 'Vestibulum et velit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus, quam a convallis aliquet, massa ligula dictum neque, sit amet porttitor urna augue a metus. Fusce consequat purus sed sapien dignissim ornare. Phasellus auctor vulputate nibh id varius. Nullam quis tempor tellus. Cras ut ex sit amet erat viverra venenatis. Maecenas eget quam dui. Donec id arcu blandit, bibendum nisl iaculis, hendrerit risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam a arcu malesuada, malesuada justo vitae, rhoncus tellus. Nunc at pretium erat, in mattis lectus. Sed quis nisl ac tortor cursus aliquam non ut est.',
            likes: 0,
            dislikes: 0
        }),
        new event({
            location: {
                latitude: 43.6047,
                longitude: 1.4442
            },
            country: 'France',
            city: 'Toulouse',
            date: new Date(),
            dateAdded: new Date(),
            title: 'Event 6',
            description: 'Fusce tincidunt rutrum urna, vel aliquet ex aliquet sed. Nulla euismod tristique ante, non aliquam libero elementum in. Integer ultricies at sapien at tempor. Vivamus eu est risus. Donec ac auctor velit, a cursus enim. Maecenas id pellentesque nulla. Curabitur vulputate faucibus varius. Integer sed sodales risus, ac consectetur sapien. In hac habitasse platea dictumst. Curabitur vel urna eros. Nam eu dolor felis. Mauris et purus ultrices libero auctor vestibulum et et nibh.',
            likes: 0,
            dislikes: 0
        }),
        new event({
            location: {
                latitude: 43.6047,
                longitude: 1.4442
            },
            country: 'France',
            city: 'Toulouse',
            date: new Date(),
            dateAdded: new Date(),
            title: 'Event 7',
            description: 'In pretium pellentesque libero in eleifend. Ut quis laoreet eros, feugiat auctor ex. Curabitur eget viverra libero, a interdum augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis condimentum, quam et vehicula rhoncus, nisl diam imperdiet tortor, id auctor nunc mauris ac magna. Vestibulum blandit dapibus dui, at tristique quam posuere in. Nam eget malesuada mi. Ut ac tellus rhoncus, pulvinar sem eu, convallis orci.',
            likes: 0,
            dislikes: 0
        }),
        new event({
            location: {
                latitude: 43.6047,
                longitude: 1.4442
            },
            country: 'France',
            city: 'Toulouse',
            date: new Date(),
            dateAdded: new Date(),
            title: 'Event 8',
            description: 'Aenean nec tincidunt quam. In quis lectus sit amet diam sollicitudin ultricies in consequat orci. Maecenas at nisi eu ex accumsan feugiat vitae sed turpis. Donec et urna hendrerit, lobortis odio eget, vulputate dolor. Nullam viverra orci libero, at rhoncus nisl pretium at. Sed ornare quis lectus et commodo. Nunc felis tellus, aliquet id ante a, convallis aliquam metus. Phasellus pellentesque nulla ac elit eleifend, placerat condimentum eros efficitur. Pellentesque ac libero nec libero suscipit blandit. In molestie lorem finibus, laoreet libero in, convallis eros. Ut eget turpis lectus. Nunc aliquet non lectus quis ornare. Donec pharetra bibendum est sit amet commodo. Nunc viverra quis est ut facilisis. Nunc rhoncus dolor nec libero molestie, id tempus felis pulvinar. Duis in aliquam lectus, ac porta urna.',
            likes: 0,
            dislikes: 0
        }),
        new event({
            location: {
                latitude: 43.6047,
                longitude: 1.4442
            },
            country: 'France',
            city: 'Toulouse',
            date: new Date(),
            dateAdded: new Date(),
            title: 'Event 9',
            description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam sed turpis rutrum, blandit tellus ut, mattis metus. Etiam facilisis, eros id malesuada dapibus, odio mi accumsan tortor, in tempus erat quam ut libero. Pellentesque vitae lacinia ex, a congue tortor. Pellentesque sit amet iaculis erat. Donec condimentum vulputate sapien, id iaculis sapien volutpat ut. Praesent arcu velit, commodo ut nibh at, auctor consectetur metus. Pellentesque at sapien mi. Vestibulum in mi interdum nisi placerat euismod in non quam. Donec ligula ligula, viverra ut mauris vitae, fermentum aliquet ligula. Donec et congue ex. Integer nisl tortor, malesuada nec blandit a, gravida ac ligula. Nullam at est id ligula posuere lobortis in at ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin maximus rutrum tellus, at egestas massa pharetra in.',
            likes: 0,
            dislikes: 0
        }),
        new event({
            location: {
                latitude: 43.6047,
                longitude: 1.4442
            },
            country: 'France',
            city: 'Toulouse',
            date: new Date(),
            dateAdded: new Date(),
            title: 'Event 10',
            description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sed lacus rutrum, volutpat magna ut, maximus sem. Vestibulum dignissim, lacus et tincidunt lobortis, quam odio pharetra arcu, id aliquam lacus libero sed velit. Nam quis leo sit amet risus faucibus tristique vel vel libero. Ut faucibus quam et porttitor placerat. Etiam ac augue lacinia, venenatis nisl vitae, consectetur dolor. Phasellus ut tincidunt orci. Proin quis felis vel felis lobortis lacinia tincidunt volutpat erat. Proin non nulla et tortor rutrum semper ut ac mi. Nulla fringilla eu tortor quis aliquet. Nulla sapien est, pulvinar et lobortis a, sagittis volutpat ex. Aenean id lectus et massa pulvinar gravida. Nunc magna mauris, pretium eu eros ut, mattis vestibulum augue.',
            likes: 0,
            dislikes: 0
        })
    ];

    for (const usr of userList) await usr.save();
    console.log('Collection users filled');
    for (const evt of eventList) await evt.save();
    console.log('Collection users filled');

    const userListFromBd = await user.find({});
    console.log('Got collection users');
    const eventListFromBd = await event.find({});
    console.log('Got collection events');

    await user.findByIdAndUpdate(userListFromBd[9]._id, {$set: {following: [userListFromBd[0]._id, userListFromBd[1]._id, userListFromBd[2]._id, userListFromBd[3]._id, userListFromBd[4]._id, userListFromBd[5]._id, userListFromBd[6]._id, userListFromBd[7]._id, userListFromBd[8]._id]}});
    console.log('Friends of Matthieu added');
    await user.findByIdAndUpdate(userListFromBd[0]._id, {$set: {following: [userListFromBd[9]._id, userListFromBd[1]._id, userListFromBd[2]._id, userListFromBd[3]._id, userListFromBd[4]._id, userListFromBd[5]._id, userListFromBd[6]._id, userListFromBd[7]._id, userListFromBd[8]._id]}});
    console.log('Friends of Test added');

    await user.findByIdAndUpdate(userListFromBd[0]._id, {$set: {events: [eventListFromBd[0]._id, eventListFromBd[1]._id, eventListFromBd[2]._id, eventListFromBd[3]._id, eventListFromBd[4]._id, eventListFromBd[5]._id, eventListFromBd[6]._id, eventListFromBd[7]._id, eventListFromBd[8]._id, eventListFromBd[9]._id]}});
    console.log('Events of Test added');

    console.log('Database successfully filled !');
}
