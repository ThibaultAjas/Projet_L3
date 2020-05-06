import React from "react";
import FriendsBarFriendRow from "./FriendBarFriendRow";
import { getUser } from "../../util/app_cookies";
import { getFriendsById } from "../../util/dataConverter";

class FriendsBarContent extends React.Component {
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
				<div id='friendsBar-top-section' className='w-100 d-inline-flex align-items-center justify-content-center'>
					<h3 className='mr-2'>Sort by</h3>

					//TODO: implement the sorting
					<select name='friends-sort-picker' id='friends-sort-picker' className='my-3'>
						<option value=''> -- </option>
						<option value='firstName'> Firstname </option>
						<option value='lastName'> Lastname </option>
						<option value='userName'> Username </option>
					</select>
				</div>

				<ul id='friendsBar-content' className='list-group'>
					{
						this.state.following.map(
							(follower) => <FriendsBarFriendRow key = {follower._id} user={follower}/>
						)
					}
				</ul>
			</>
		);
	}
}

export default FriendsBarContent;