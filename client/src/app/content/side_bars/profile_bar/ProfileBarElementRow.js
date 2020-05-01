import React from "react";

const ProfileBarElementRow = ({ icon, content }) => {
	return (
		<li className='list-element profileBar-element-row'>
			<a href={content} className='d-block px-3 py-3'>
				<span className={icon} />
				{content}
			</a>
		</li>
	);
};

export default ProfileBarElementRow;