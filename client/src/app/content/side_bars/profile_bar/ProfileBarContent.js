import React from "react";
import ProfileBarElementRow from "./ProfileBarElementRow";

const ProfileBarContent = ({ content }) => {

	return (
		<ul className='list-group overflow-auto'>
			{
				content.map( element => <ProfileBarElementRow key = {element.name} content = {element.name} icon = {element.icon} href={element.href}/> )
			}
		</ul>
	);
};

export default ProfileBarContent;