import React from "react";
import { getUser } from "../../cookies/app_cookies";

const ProfileBarTopSection = () => {

	return (
		<div id='profileBar-top-section' className='text-center d-flex flex-column align-items-center py-4'>
			<div id='profile-pic' className='rounded-circle'/>
			<h3 id='profileBar-top-section-title'> { getUser().firstName + " " + getUser().lastName } </h3>
			<h5 id='profileBat-top-section-username'> { getUser().pseudonym } </h5>
		</div>
	);
};

export default ProfileBarTopSection;
