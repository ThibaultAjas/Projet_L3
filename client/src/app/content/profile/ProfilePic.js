import React from "react";

const ProfilePic = ({ userName, textColor, bgColor, size }) => {
	const style = {
		'height': size,
		'width': size,
		'background-color': bgColor,
		'color': textColor
	};

	const letterStyle = {
		'font-size': '2em',
		'font-family': "'Ubuntu', cursive"
	};

	return (
		<div className='rounded-circle text-center d-flex align-items-center justify-content-center pt-1' style={style}>
			<h1 className='font-weight-bold' style={letterStyle}>{ userName.charAt(0) }</h1>
		</div>
	);
};

export default ProfilePic;