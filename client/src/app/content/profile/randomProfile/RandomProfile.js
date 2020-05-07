import React from "react";
import RandomProfileHeader from "./RandomProfileHeader";
import { getFriendsById, getUserEventList } from "../../util/dataConverter";
import Feed from "../../feed/Feed";

class RandomProfile extends React.Component {
	state = { user: {} };
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
			});

		getUserEventList( this.id ).then( (data) => {
			this.events = data;
			console.log("id: " , this.id, data);
			this.forceUpdate();

		});
	}

	render() {
		return (
			<div>
				<RandomProfileHeader firstName={ this.firstName } userName={ this.userName } lastName={ this.lastName } id={ this.id }/>
				<Feed content={ this.events }/>
			</div>

		);
	}
}

export default RandomProfile;