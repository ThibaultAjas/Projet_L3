import React from "react";

import '../../../stylesheets/random_user.css';
import RandomProfileActionBar from "./RandomProfileActionBar";
import ProfilePic from "../ProfilePic";

const RandomProfileHeader = ({ user }) => {
	return (
		<>
			<div id='random-user-header' className='bg-secondary w-100 d-flex align-items-center pl-3'>
				<ProfilePic userName={user.userName} textColor='#a87656' bgColor='#e0bb82' size='150px'/>
				<RandomProfileActionBar />
			</div>

		</>
	)
};

export default RandomProfileHeader;