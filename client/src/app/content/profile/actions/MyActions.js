import React from "react";
import Header from "../../header/Header";

import { isLogged } from "../../cookies/app_cookies";
import LoginScreen from "../../login/LoginScreen";
import Home from "../../../Home";

const MyActions = () => {
	if (! isLogged()) return ( <LoginScreen/> );

	return (
		<h1>coucou</h1>
	);
};

export default MyActions;