import React from "react";

const ProfilePic = ({ userName, textColor, bgColor, size }) => {
	const style = {
		height: size,
		width: size,
		backgroundColor: bgColor,
		color: textColor
	};

	const letterStyle = {
		fontSize: '2em',
		fontFamily : "'Ubuntu', cursive"
	};

	return (
		<div className='rounded-circle text-center d-flex align-items-center justify-content-center pt-1' style={style}>
			<h1 className='font-weight-bold' style={letterStyle}>{ (userName) ? userName.charAt(0) : '' }</h1>
		</div>
	);
};

export default ProfilePic;