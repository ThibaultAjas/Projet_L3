import React from "react";

import {getUser, isLogged} from "../../../util/app_cookies";
import LoginScreen from "../../../login/LoginScreen";
import Feed from "../../../feed/Feed";
import { getUserEventList } from "../../../util/dataConverter";

class MyActions extends React.Component {
	state = { events: [] };
	events = [];

	componentDidMount() {
		console.log("utilisateur",getUser());
		getUserEventList( getUser() )
			.then( (data) => {
				this.setState({ events: data.events });
				this.events = this.state.events;
				// console.log("data",data.user);
				// console.log("avant",getUser());
				// setUser(data.user);
				// console.log("après",getUser());
				// console.log("user : ",this.events);
				this.forceUpdate();
			});
	}

	render() {
		if (! isLogged()) return ( <LoginScreen/> );

		return (
			<Feed content={ this.events }/>
		);
	}



};

export default MyActions;