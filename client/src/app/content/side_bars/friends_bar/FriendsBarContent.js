import React from "react";
import FriendsBarFriendRow from "./FriendBarFriendRow";
import { getUser } from "../../util/app_cookies";
import { getFriendsById } from "../../util/dataConverter";

class FriendsBarContent extends React.Component {
	componentDidMount() {
		getFriendsById( getUser().following )
			.then( (data) => {
				console.log(data);
			});

		this.forceUpdate();
	}

	render() {
		return (
			<ul id='friendsBar-content' className='list-group overflow-auto'>
				{
					getUser().following.map( (follower) => <FriendsBarFriendRow key = {follower} name={follower} id={follower} />)
				}
			</ul>
		);
	}
}

export default FriendsBarContent;