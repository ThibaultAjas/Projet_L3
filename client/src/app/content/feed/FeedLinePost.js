import React from "react";

const FeedLinePost = ({ imageURL, description }) => {
	return (
		<div className='card-body text-muted p-0 pb-2 d-inline-flex overflow-hidden'>
			<img
				id='event-pic'
				src={imageURL}
				alt=''
				className='pr-3'
			/>
			<div id='description-div' className='flex-wrap'>
				{description}
			</div>
		</div>
	);
};

export default FeedLinePost;