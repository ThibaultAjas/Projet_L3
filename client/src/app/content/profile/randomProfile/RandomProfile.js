import React from "react";
import RandomProfileHeader from "./RandomProfileHeader";
import { getFriendsById, getUserEventList } from "../../util/dataConverter";
import Feed from "../../feed/Feed";
import { getUser } from "../../util/app_cookies";

class RandomProfile extends React.Component {
	state = {
		user: {},
		events: []
	};
	userName = '';
	firstName = '';
	lastName = '';
	id = '';
	events = [];

	componentDidMount() {
		console.log("bonjour",getUser());
		let url =  new URL(window.location.href).pathname.substring(9);

		if (url === getUser()._id) window.location.href = '/profile';

		getFriendsById( [ url ] )
			.then( (data) => {
				this.setState({ user: data[0] });

				if (data[0] === undefined) window.location.href = '/';

				this.userName = this.state.user.userName;
				this.firstName = this.state.user.firstName;
				this.lastName = this.state.user.lastName;
				this.id = this.state.user._id;

				getUserEventList( this.state.user ).then( (data) => {
					this.events = [];
					this.setState({ events: data.events });
					this.events = this.state.events;

					console.log('in profile events: ', data);
					this.forceUpdate();
				});
			});
	}

	render() {
		return (
			<div>
				<RandomProfileHeader firstName={ this.firstName } userName={ this.userName } lastName={ this.lastName } id={ this.id }/>
				<Feed content={this.events}/>
			</div>

		);
	}
}

export default RandomProfile;