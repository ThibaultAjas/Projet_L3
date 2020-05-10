import React from "react";

const FeedDotsPopup = ({ userId }) => {

	const options =
		[
			{ text: "Report", href: '/report/' + userId },
			// { text: "Hide from feed", href: '/' },
			{ text: "See profile", href: '/profile/' + userId }
		];

	return (
		<div className='dotsPopup card align-items-end d-inline-block'>
			{
				options.map( option => <a href={option.href} className='dots-option text-right p-1'> { option.text } </a> )
			}
		</div>
	);
};

export default FeedDotsPopup;