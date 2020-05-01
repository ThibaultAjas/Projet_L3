import React from "react";
import SwapFeedButton from "./SwapFeedButton";

import '../../stylesheets/swap_feed_buttons.css';
import '../../scripts/swap_feed_buttons_scripts';

const SwapFeedButtons = () => {
	return (
		<div id="buttons-container" className='d-flex flex-column'>
			<SwapFeedButton name="map" href="/map"/>
			<SwapFeedButton name="feed" href="/"/>
		</div>
	);
};

export default SwapFeedButtons;