import React from "react";
import { getFriendsById } from "../../../util/dataConverter";
import { getUser } from "../../../util/app_cookies";
import MyFriendsCard from "./MyFriendsCard";

import '../../../../stylesheets/friend_visu.css';

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
				<h1 className='text-center mt-5 font-weight-bold'> Mes abonnements </h1>
				<div className='d-flex flex-wrap justify-content-center mt-5'>

					{
						this.state.following.map(
							(follower) => <MyFriendsCard key={follower._id} userID={follower._id} friend={follower}/>
						)
					}
				</div>
			</>
		)
	}
}

export default MyFriends;