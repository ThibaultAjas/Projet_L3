import React from "react";

const ProfileCard = ({ title, descr, href }) => {
	return (
		<a href={href} className='profile-card card p-2 mx-2 text-center'>
			<h3 className='card-title text-capitalize'> {title} </h3>
			<div className="card-body text-muted">
				{descr}
			</div>
		</a>
	);
};

export default ProfileCard;