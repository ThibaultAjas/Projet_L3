import React from "react";
import FriendsBarFriendRow from "./FriendBarFriendRow";
import { getUser } from "../../util/app_cookies";
import { getFriendsById } from "../../util/dataConverter";
import SearchIcon from "../../search/SearchIcon";

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

	//TODO: implement the sorting
	render() {
		return (
			<div>
				<div id='friendsBar-top-section' className='w-100 d-inline-flex align-items-center flex-column justify-content-center bg-secondary mb-2'>
					<h3> You're following them </h3>
					{/*<div className='d-inline-flex align-items-center'>*/}
					{/*	<h5 className='mr-2'>Sort by</h5>*/}

					{/*	<select name='friends-sort-picker' id='friends-sort-picker' className='my-3'>*/}
					{/*		<option value=''> -- </option>*/}
					{/*		<option value='firstName'> Firstname </option>*/}
					{/*		<option value='lastName'> Lastname </option>*/}
					{/*		<option value='userName'> Username </option>*/}
					{/*	</select>*/}
					{/*</div>*/}
				</div>

				<ul id='friendsBar-content' className='list-group'>
					{
						this.state.following.map(
							(follower) => <FriendsBarFriendRow key = {follower._id} user={follower}/>
						)
					}
				</ul>
			</div>
		);
	}
}

export default FriendsBarContent;