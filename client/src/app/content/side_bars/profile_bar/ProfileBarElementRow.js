import React from "react";

const ProfileBarElementRow = ({ icon, content, href }) => {
	return (
		<li className='list-element profileBar-element-row'>
			<a href={href} className='d-block px-3 py-3'>
				<span className={icon} />
				{content}
			</a>
		</li>
	);
};

export default ProfileBarElementRow;