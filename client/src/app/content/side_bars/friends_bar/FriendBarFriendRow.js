import React from "react";

const FriendsBarFriendRow = ({ user }) => {
	return (
		<li className='list-element'>
			<a href={'/profile/'+ user._id} className='d-block px-3 py-1'>
				<span/>
				{ user.firstName } { user.lastName }
			</a>
		</li>
	);
};

export default FriendsBarFriendRow;