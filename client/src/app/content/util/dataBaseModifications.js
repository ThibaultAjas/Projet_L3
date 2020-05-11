import axios from "axios";

const follow = ( user1, user2 ) => {
	axios({
		url: '/user/addFollow',
		method: 'POST',
		data: {user1, user2}
	})
		.then( (response) => {
			console.log('User floowed')
		})
		.catch((error) => {
			console.log(`Error: ${ error }`)
		});
};

export {
	follow
};
