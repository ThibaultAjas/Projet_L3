import React from "react";
import { getUser } from "../../util/app_cookies";
import { follow } from "../../util/dataBaseModifications";

const RandomProfileActionBar = ({ id }) => {

	return (
		<div id='action-bar' className='text-white'>

			{
				(getUser().following.includes( id ))
					? <button id='random-unfollow-button' className='action-button mr-2'> Unfollow </button>


					: <button id='random-follow-button' className='action-button mr-2' onClick={ () => follow(id) }> Follow </button>
			}

			<button className='action-button mr-2'> Report </button>

		</div>
	);
};

export default RandomProfileActionBar;