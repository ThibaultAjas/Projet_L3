import React from "react";

const SwapFeedButton = ({ name, href }) => {
	return (
		<div className='d-flex flex-row'>
			<a href={href} id = {"swap-feed-button-" + name} className='swap-feed-button'/>
			<span> <h5 id={"tooltip-" + name} className="button-tooltip"> {name} </h5> </span>
		</div>
	);
};

export default SwapFeedButton;