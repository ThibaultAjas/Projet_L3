import React from "react";
import FriendsBarContent from "./FriendsBarContent";

import '../../../stylesheets/side_bars.css';

const FriendsBar = () => {
	return (
		<nav id='friendsBar' className='d-flex flex-column friendsBar-hidden h-100 overflow-auto'>
			<FriendsBarContent/>
		</nav>
	);
};

export default FriendsBar;