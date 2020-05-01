import React from "react";
import friends from "./TempFriendsFike";

const FriendsBarContent = () => {
	return (
		<ul id='friendsBarContent' className='list-group overflow-auto'>
			{
				friends.map( friend => <FriendsBarContent key = {friends.id} content={friend.name} profilePic = {friend.profilePic} />)
			}
		</ul>
	);
};

export default FriendsBarContent;