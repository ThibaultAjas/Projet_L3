import React from "react";

import { getUser, isLogged } from "../../cookies/app_cookies";
import LoginScreen from "../../login/LoginScreen";

const MyActions = () => {
	if (! isLogged()) return ( <LoginScreen/> );

	return (
		<h1>coucou</h1>
	);
};

export default MyActions;