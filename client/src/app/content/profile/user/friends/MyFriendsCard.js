import React from "react";

const MyFriendsCard = ({ friend }) => {
	return (
		<div className='card'>
			{friend.firstName}
		</div>
	)
};

export default MyFriendsCard;