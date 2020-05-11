import React from "react";

import {getUser, isLogged, setUser} from "../../../util/app_cookies";
import LoginScreen from "../../../login/LoginScreen";
import Feed from "../../../feed/Feed";
import { getUserEventList } from "../../../util/dataConverter";

class MyActions extends React.Component {
	state = { events: [] };
	events = [];

	componentDidMount() {
		getUserEventList( getUser() )
			.then( (data) => {
				this.setState({ events: data.events });
				this.events = this.state.events;
				setUser(data.user);
				console.log("user : ",this.events);
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