import React from "react";

const FriendsBarFriendRow = ({ profilePic, name }) => {
	return (
		<li className='friendsBar-friend-row list-element'>
			<a href={name} className='d-block px-3 py-1'>
				<span className={profilePic}></>
				{name}
			</a>
		</li>
	);
};

export default FriendsBarFriendRow;