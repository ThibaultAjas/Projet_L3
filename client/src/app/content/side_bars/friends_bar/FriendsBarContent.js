import React from "react";
import friends from "./TempFriendsFike";
import FriendsBarFriendRow from "./FriendBarFriendRow";

const FriendsBarContent = () => {
	return (
		<ul id='friendsBar-content' className='list-group overflow-auto'>
			{
				friends.map( (friend) => <FriendsBarFriendRow key = {friends.id} name={friend.name} profilePic = {friend.profilePic} />)
			}
		</ul>
	);
};

export default FriendsBarContent;