import { getAllEvents, getAllUsers } from "./dataConverter";

const search_user = async ( name ) => {
	let result = new Set();

	await getAllUsers().then((response) => {
		 response.map( (user) => {
		 	if (
		    	user.firstName.toLowerCase().includes( name.toLowerCase() ) ||
				user.lastName.toLowerCase().includes( name.toLowerCase() ) ||
				user.userName.toLowerCase().includes(name.toLowerCase())
			) result.add(user);
		 });
	});

	return Array.from(result);
};

const search_event = async ( name ) => {
	let result = new Set();

	await getAllEvents().then((response) => {
		response.map( ( event ) => {
			if (
				event.title.toLowerCase().includes(name.toLowerCase())) result.add(event);
		});
	});

	return Array.from(result);
};


export { search_user, search_event };

