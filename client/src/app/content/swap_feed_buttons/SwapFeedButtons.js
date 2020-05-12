import React from "react";
import SwapFeedButton from "./SwapFeedButton";

import '../../stylesheets/swap_feed_buttons.css';
import '../../scripts/swap_feed_buttons_scripts';

const SwapFeedButtons = ({ userProfile }) => {
	return (
		<div id="buttons-container" className='d-flex flex-column'>
			<SwapFeedButton name="map" href={(userProfile) ? '/profile/map' : "/map"}/>
			<SwapFeedButton name="feed" href="/"/>
		</div>
	);
};

export default SwapFeedButtons;