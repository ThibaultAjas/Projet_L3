import { getAllUsers } from "./dataConverter";

const search_user = ( name ) => {
	return search_user_by_firstName( name );
};

const search_user_by_firstName = ( name ) => {
	let users = [];

	getAllUsers().then((response) => {
		response.map( (user) => {
			if (user.firstName.toLowerCase().includes(name.toLowerCase())) users.push(user);
		});
	});

	return users;

};

export { search_user };

