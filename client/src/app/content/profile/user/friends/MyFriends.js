import React from "react";
import { getFriendsById } from "../../../util/dataConverter";
import { getUser } from "../../../util/app_cookies";
import MyFriendsCard from "./MyFriendsCard";

class MyFriends extends React.Component {
	state = {
		following: []
	};

	componentDidMount() {
		getFriendsById( getUser().following )
			.then( (data) => {
				this.setState({ following: data} );
			});
	}

	render() {
		return (
			<>
				{
					this.state.following.map(
						(follower) => <MyFriendsCard key = {follower._id} friend={follower}/>
					)
				}
			</>
		)
	}
}

export default MyFriends;