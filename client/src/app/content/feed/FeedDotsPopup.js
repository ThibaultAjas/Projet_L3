import React from "react";

const options =
[
	"Report",
	"Hide from feed",
	"See profile"
];

const FeedDotsPopup = () => {
	return (
		<div className='dotsPopup card align-items-end d-inline-block'>
		{
			options.map( option => <div className='dotsOption text-right p-1'> { option } </div> )
		}
		</div>
	);
};

export default FeedDotsPopup;