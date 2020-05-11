import React from "react";
import { getUser } from "../../util/app_cookies";
import {getFriendsById, unFollow} from "../../util/dataConverter";
import { follow } from "../../util/dataBaseModifications";

class RandomProfileActionBar extends React.Component {
	state = {
		following: []
	};

	componentDidMount() {

	}

	follow() {
		getFriendsById( [this.props.id] )
			.then( (data) => {
				console.log(data[0]);
				follow(getUser(), data[0]);
			});

		console.log(getUser());
	}

	render() {
		return (
			<div id='action-bar' className='text-white'>

				{
					(getUser().following.includes( this.props.id ))
						? <button id='random-unfollow-button' className='action-button mr-2' onClick={ () => unFollow(this.props.id) }> unfollow </button>

						: <button id='random-follow-button' className='action-button mr-2' onClick={ () => this.follow() } > Follow </button>
				}

				<button className='action-button mr-2'> Report </button>

			</div>
		);
	}
};

export default RandomProfileActionBar;