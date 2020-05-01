import React from "react";
import FriendsBarTopSection from "./FriendsBarTopSection";
import FriendsBarContent from "./FriendsBarContent";

const FriendsBar = () => {
	return (
		<nav id='friendsBar' className='d-flex flex-column friendsBar_hidden'>
			<FriendsBarTopSection/>
			<FriendsBarContent/>
		</nav>
	);
};

export default FriendsBar;