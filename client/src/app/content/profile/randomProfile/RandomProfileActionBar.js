import React from "react";
import { getUser } from "../../util/app_cookies";
import { getFriendsById, unFollow } from "../../util/dataConverter";
import { follow } from "../../util/dataBaseModifications";

class RandomProfileActionBar extends React.Component {
	state = {
		following: []
	};

	componentDidMount() {

	}

	action() {
		getFriendsById( [this.props.id] )
			.then( (data) => {

				follow(getUser(), data[0]).then(()=> "");
				follow(getUser(), data[0]).then(()=> "");

				window.location.href = '/friends/search';
			});
	}

	unAction() {
		unFollow(this.props.id).then(() => '');

		window.location.href = '/';
	}


	render() {
		return (
			<div id='action-bar' className='text-white'>

				{
					(getUser().following.includes( this.props.id ))
						? <button id='random-unfollow-button' className='action-button mr-2' onClick={ () => this.unAction() }> Se désabonner </button>

						: <button id='random-follow-button' className='action-button mr-2' onClick={ () => this.action() } > S'abonner </button>
				}

				<button className='action-button mr-2'> Report </button>

			</div>
		);
	}
};

export default RandomProfileActionBar;