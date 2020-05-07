import React from "react";

import { getUser, isLogged } from "../../../util/app_cookies";
import LoginScreen from "../../../login/LoginScreen";
import Feed from "../../../feed/Feed";
import { getFriendsById, getUserEventList } from "../../../util/dataConverter";

class MyActions extends React.Component {
	state = { events: [] };
	events = [];

	componentDidMount() {
		getUserEventList( getUser()._id )
			.then( (data) => {
				this.setState({ events: data });
				this.events = this.state.events;
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