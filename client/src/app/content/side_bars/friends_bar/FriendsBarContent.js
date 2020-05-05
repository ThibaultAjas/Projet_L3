import React from "react";
import FriendsBarFriendRow from "./FriendBarFriendRow";
import { getUser } from "../../util/app_cookies";


const FriendsBarContent = () => {
	return (
		<ul id='friendsBar-content' className='list-group overflow-auto'>
			{
				getUser().following.map( (follower) => <FriendsBarFriendRow key = {follower} name={follower} id={follower} />)
			}
		</ul>
	);
};

export default FriendsBarContent;