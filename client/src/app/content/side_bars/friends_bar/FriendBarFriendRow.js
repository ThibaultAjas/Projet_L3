import React from "react";
import ProfilePic from "../../profile/ProfilePic";

const FriendsBarFriendRow = ({ user }) => {
	return (
		<li className='list-element'>
			<a href={'/profile/'+ user._id} className='d-block px-3 py-1 d-inline-flex align-items-center w-100'>
				<span id='friends-bar-profile-pic'><ProfilePic userName={user.firstName} textColor='#a87656' bgColor='#e0bb82' size='30px'/></span>
				<span className='ml-2'>{ user.firstName } { user.lastName }</span>
			</a>
		</li>
	);
};

export default FriendsBarFriendRow;