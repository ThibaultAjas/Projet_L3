import React from "react";
import ProfileBarTopSection from "./ProfileBarTopSection";
import ProfileBarContent from "./ProfileBarContent";

const ProfileBar = () => {
	return (
			<nav id='profileBar' className='d-flex flex-column profileBar-hidden'>
				<ProfileBarTopSection/>
				<ProfileBarContent/>
			</nav>
	);
};

export default ProfileBar;