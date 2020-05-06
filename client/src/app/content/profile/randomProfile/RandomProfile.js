import React from "react";
import RandomProfileHeader from "./RandomProfileHeader";
import { getFriendsById } from "../../util/dataConverter";
import { getUser } from "../../util/app_cookies";

class RandomProfile extends React.Component {
	userID;

	componentDidMount() {
		let url = new URL(window.location.href);
		this.userID = url.pathname.substring( 9 );

		getFriendsById( [this.userID] )
			.then( (data) => {
				console.log(data);
				this.setState({ following: data} );
				this.forceUpdate();
			});
	}

	render() {
		return (
			<div>
				{/*<RandomProfileHeader user={ getFriendsById([this.userID]) }/>*/}
			</div>
		);
	}
}

export default RandomProfile;