import { getAllUsers } from "./dataConverter";

const search_user = async ( name ) => {
	let list = [];

	await search_user_by_firstName( name ).then((data) => list = data);

	return list;
};

const search_user_by_firstName = async ( name ) => {
	let users = [];

	await getAllUsers().then((response) => {
		response.map( (user) => {
			if (user.firstName.toLowerCase().includes(name.toLowerCase())) users.push(user);
		});
	});

	return users;

};

export { search_user };

