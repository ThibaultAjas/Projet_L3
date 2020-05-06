import React from "react";
import FriendsBarFriendRow from "./FriendBarFriendRow";
import { getUser } from "../../util/app_cookies";
import { getFriendsById } from "../../util/dataConverter";

class FriendsBarContent extends React.Component {
	state = { following: [] };

	componentDidMount() {
		getFriendsById( getUser().following )
			.then( (data) => {
				console.log(data);
				this.setState({ following: data} );
				this.forceUpdate();
			});
	}

	render() {
		return (
			<ul id='friendsBar-content' className='list-group overflow-auto'>
				{
					this.state.following.map( (follower) => <FriendsBarFriendRow key = {follower._id} user={follower}/>)
				}
			</ul>
		);
	}
}

export default FriendsBarContent;