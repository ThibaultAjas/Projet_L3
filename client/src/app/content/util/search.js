import { getAllUsers } from "./dataConverter";

const search_user = async ( name ) => {
	let result = new Set();

	await search_user_by_firstName( result, name ).then((data) => result = data);

	return Array.from(result);
};

const search_user_by_firstName = async ( result, name ) => {

	await getAllUsers().then( ( response ) => {
		response.map( ( user ) => {
			if (
				user.firstName.toLowerCase().includes( name.toLowerCase() ) ||
				user.lastName.toLowerCase().includes( name.toLowerCase() ) ||
				user.userName.toLowerCase().includes(name.toLowerCase())
			) {
				result.add( user );
			}
		} );
	} );

	return result;
};

const search_event = ( name ) => {

}

export { search_user };

