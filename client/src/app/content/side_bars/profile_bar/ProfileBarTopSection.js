import React from "react";
import { getUser } from "../../util/app_cookies";
import ProfilePic from "../../profile/ProfilePic";

const ProfileBarTopSection = () => {

	return (
		<div id='profileBar-top-section' className='text-center d-flex flex-column align-items-center py-4'>
			<span id='profile-bar-pic'><ProfilePic userName={getUser().userName} bgColor='#4b69ab' size='100px' textColor='#c49235'/></span>
			<h3 id='profileBar-top-section-title'> { getUser().firstName + " " + getUser().lastName } </h3>
			<h5 id='profileBat-top-section-username'> { getUser().pseudonym } </h5>
		</div>
	);
};

export default ProfileBarTopSection;
