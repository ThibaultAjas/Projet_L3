import React from "react";
import { getUser } from "../../util/app_cookies";
import { getFriendsById } from "../../util/dataConverter";

class RandomProfileActionBar extends React.Component {
	state = {
		following: []
	};

	componentDidMount() {

	}

	follow() {
		getFriendsById( ['5eb70701ad9a4b05881d9a78'] )
			.then( (data) => {
				console.log(data[0])
				// follow(data[0]);
			});

		console.log(getUser());
	}

	render() {
		return (
			<div id='action-bar' className='text-white'>

				{
					(getUser().following.includes( this.props.id ))
						? <button id='random-unfollow-button' className='action-button mr-2'> Unfollow </button>

						: <button id='random-follow-button' className='action-button mr-2' onClick={ () => this.follow() } > Follow </button>
				}

				<button className='action-button mr-2'> Report </button>

			</div>
		);
	}
};

export default RandomProfileActionBar;