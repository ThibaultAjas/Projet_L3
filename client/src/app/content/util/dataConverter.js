import axios from "axios";
import { getUser } from "./app_cookies";
// import { setLogged, setSessionMail, setSessionPassword, setUser } from "./app_cookies";

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
			console.log("ntm",data);
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
			tmp=[0];
		});
	return(tmp);
};

// TODO: change for getAllFromFollowing
const getUserEvents = async () => {
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
	let events = [];

	await axios({
		url: '/event/getAllForUser',
		method: 'POST',
		data: user
	})
		.then( (response) => {
			console.log('teub: ', response);
			events = response.data.data;
		})
		.catch((error) => {
			console.log(`Error: ${ error }`);
		});

	return events;
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
		url: 'event/getOne',
		method: 'POST',
		data: id
	}).then( (response) => {
		console.log('ma reponse est: ', response);
	}).catch((error) => {
		console.log(`Error: ${ error }`)
	});

	return event;
};


export {
	getDateFrom, getUserEvents, getFriendsById, getUserEventList,getFollowersEvents, getEventFromId
};
