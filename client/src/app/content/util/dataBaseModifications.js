import axios from "axios";

const follow = ( user ) => {
	axios({
		url: '/user/addFollow',
		method: 'POST',
		data: user
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
