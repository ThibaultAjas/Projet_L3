import axios from "axios";
import { setUser } from "./app_cookies";

const follow = async ( user1, user2 ) => {
	await axios({
		url: '/user/follow',
		method: 'POST',
		data: {user1, user2}
	})
		.then( (response) => {
			setUser(response.data.data);
		})
		.catch((error) => {
			console.log(`Error: ${ error }`)
		});
};

export {
	follow
};
