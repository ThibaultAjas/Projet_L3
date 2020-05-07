import axios from "axios";
import { getUser } from "./app_cookies";
// import { setLogged, setSessionMail, setSessionPassword, setUser } from "./app_cookies";

const getDateFrom = ( country, date) => {

	const ye = new Intl.DateTimeFormat(country, { year: 'numeric' }).format( date );
	const mo = new Intl.DateTimeFormat(country, { month: 'long' }).format( date );
	const da = new Intl.DateTimeFormat(country, { day: '2-digit' }).format( date );

	return `${ da } ${ mo } ${ ye }`;
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

//TODO: fix it

// const getFollowersEvents = () => {
// 	axios({
// 		url: '/event/getAllFromFollowing',
// 		method: 'POST',
// 		data: getUser()
// 	})
// 		.then((response) => {
// 			const data = response.data;
// 			return data.data;
//
// 		})
// 		.catch((error) => {
// 			console.log(`Error: ${error}`);
// 		});
// };

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

export {
	getDateFrom, getUserEvents, getFriendsById
};
