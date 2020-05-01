import React from "react";
import FriendsBarTopSection from "./FriendsBarTopSection";
import FriendsBarContent from "./FriendsBarContent";

import '../../../stylesheets/side_bars.css';

const FriendsBar = () => {
	return (
		<nav id='friendsBar' className='d-flex flex-column friendsBar-hidden'>
			<FriendsBarTopSection/>
			<FriendsBarContent/>
		</nav>
	);
};

export default FriendsBar;