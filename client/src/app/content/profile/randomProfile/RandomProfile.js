import React from "react";
import RandomProfileHeader from "./RandomProfileHeader";
import { getFriendsById, getUserEventList } from "../../util/dataConverter";
import Feed from "../../feed/Feed";

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
		getFriendsById( [ new URL(window.location.href).pathname.substring(9) ] )
			.then( (data) => {
				this.setState({ user: data[0] });
				this.userName = this.state.user.userName;
				this.firstName = this.state.user.firstName;
				this.lastName = this.state.user.lastName;
				this.id = this.state.user._id;

				getUserEventList( this.state.user ).then( (data) => {
					this.setState({ events: data });
					this.events = this.state.events;

					console.log('in profile events: ', this.state.events);

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