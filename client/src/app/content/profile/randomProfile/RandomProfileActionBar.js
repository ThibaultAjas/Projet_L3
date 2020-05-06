import React from "react";

class RandomProfileActionBar extends React.Component {
	render() {
		return (
			<div id='action-bar' className='text-white'>

				<button className='action-button mr-2'> Follow </button>
				<button className='action-button mr-2'> Report </button>

			</div>
		);
	}
}

export default RandomProfileActionBar;