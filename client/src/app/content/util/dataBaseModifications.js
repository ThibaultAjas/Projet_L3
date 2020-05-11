import axios from "axios";
import { setUser } from "./app_cookies";

const follow = ( user1, user2 ) => {
	axios({
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
