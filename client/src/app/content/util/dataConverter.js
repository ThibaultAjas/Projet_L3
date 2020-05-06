import axios from "axios";

const getDateFrom = ( country, date) => {

	const ye = new Intl.DateTimeFormat(country, { year: 'numeric' }).format( date );
	const mo = new Intl.DateTimeFormat(country, { month: 'long' }).format( date );
	const da = new Intl.DateTimeFormat(country, { day: '2-digit' }).format( date );

	return `${ da } ${ mo } ${ ye }`;
};

// TODO: change for getAllFromFollowing
const getUserEvents = async () => {
	await axios.post( '/event/getAll' )
		.then( ( response ) => {
			const data = response.data;
			// console.log( "pd", data.data[ 0 ] );
			return data.data;

		} )
		.catch( ( error ) => {
			console.log( `Error: ${ error }` );
			return null;
		} );
};

export {
 getDateFrom, getUserEvents
};
