import React from "react";

const FeedDotsPopup = ({ options }) => {

	return (
		<div className='dotsPopup card align-items-end d-inline-block'>
			{
				options.map( (option, index) => <a href={option.href} className='dots-option text-right p-1' key={index}> { option.text } </a> )
			}
		</div>
	);
};

export default FeedDotsPopup;