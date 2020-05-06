import React from "react";
import { getDateFrom } from "../util/dataConverter";

const FeedLinePost = ({ imageURL, description, postDate }) => {

	let date = getDateFrom('fr', new Date(postDate));

	return (
		<div className='card-body text-muted p-0 pb-2 d-inline-flex overflow-hidden'>
			<img
				id='event-pic'
				src={ imageURL }
				alt=''
				className='pr-3'
			/>

			<div id='description-div' className='flex-wrap'>
				<blockquote className='blockquote-footer m-0 font-italic'> le { date } </blockquote>
				{ description }
			</div>
		</div>
	);
};

export default FeedLinePost;