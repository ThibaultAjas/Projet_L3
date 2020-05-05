import React from "react";

const FriendsBarFriendRow = ({ profilePic, name, id }) => {
	return (
		<li className='list-element'>
			<a href={'/profile/'+ id} className='d-block px-3 py-1'>
				<span className={profilePic}/>
				{name}
			</a>
		</li>
	);
};

export default FriendsBarFriendRow;