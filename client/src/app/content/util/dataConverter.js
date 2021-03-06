import axios from "axios";
import {getUser, setUser} from "./app_cookies";

const getDateFrom = ( country, date) => {

	const ye = new Intl.DateTimeFormat(country, { year: 'numeric' }).format( date );
	const mo = new Intl.DateTimeFormat(country, { month: 'long' }).format( date );
	const da = new Intl.DateTimeFormat(country, { day: '2-digit' }).format( date );

	return `${ da } ${ mo } ${ ye }`;
};

//TODO: verifier la méthode, ici on a le même event 10 fois (meme id)
const getFollowersEvents = async () => {
	// axios.post('/event/getAll')
	let tmp = [];
	await axios({
		url: '/event/getAllFromFollowing',
		method: 'POST',
		data: getUser()
	})
		.then((response) => {
			const data = response.data;
			tmp=data.data;
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
			tmp=[0];
		});
	return(tmp);
};

const getAllEvents = async () => {
	let tmp = [];
	await axios.post( '/event/getAll' )
		.then( ( response ) => {
			const data = response.data;
			tmp = data.data;
		} )
		.catch( ( error ) => {
			console.log( `Error: ${ error }` );
		} );
	return(tmp);
};

let getUserEventList = async ( user ) => {
	let tmp = {};

	await axios({
		url: '/event/getAllForUser',
		method: 'POST',
		data: user
	})
		.then( (response) => {
			tmp = response.data.data;
		})
		.catch((error) => {
			console.log(`Error: ${ error }`);
		});

	return tmp;
};

const getFriendsById = async ( idsList ) => {
	let friends = [];

	await axios({
		url: '/user/getAllByIds',
		method: 'POST',
		data: idsList
	})
		.then((response) => {
			friends = response.data.data;
		})
		.catch((error) => {
			console.log(`Error: ${ error }`)
		});

	return friends;
};

const getEventFromId = async ( id ) => {
	let event = 'troll';

	await axios({
		url: '/event/getOne',
		method: 'POST',
		data: id
	}).then( (response) => {
		event = response.data.data;
	}).catch((error) => {
		console.log(`Error: ${ error }`)
	});

	return event;
};

const getStats = async () =>{

	let bj = '';

	await axios.post('/api/stats')
		.then((response) =>{
			bj=response.data.data;
		})
		.catch((error) => {
			console.log(`Error: ${ error }`)
		});
	return(bj);
};

const getAllUsers = async () => {
	let users = [];
	await axios.post( '/user/getAll' )
		.then( ( response ) => {
			const data = response.data;
			users = data.data;

		} )
		.catch( ( error ) => {
			console.log( `Error: ${ error }` );
		} );

	return(users);
};

const unFollow = async (unfoller) => {
	console.log("merde");
	const payload = {
		user1: getUser(),
		user2: {_id: unfoller}
	};
	axios({
		url: '/user/unfollow',
		method: 'POST',
		data: payload
	})
		.then(response => {

			setUser(response.data.data);
		})
		.catch(error => {
			console.log('Error: ', error);
		})
};

export {
	getDateFrom, getFriendsById, getUserEventList, getFollowersEvents, getEventFromId, getStats, getAllUsers ,getAllEvents, unFollow
};
