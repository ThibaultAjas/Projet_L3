import React from "react";

import FeedInteractionIcon from "./FeedInteractionIcon";
import { like, dislike, comment, share } from "../../scripts/feed_script";

const FeedInteractionsIcons = ({ id }) => {
	return (
		<div className='d-flex flex-row align-items-baseline'>

			<div id='feed-interactions-div'>
				<FeedInteractionIcon name={'like-icon-' + id} icon='far fa-thumbs-up' call={ like }/>
				<FeedInteractionIcon name={'dislike-icon-' + id} icon='far fa-thumbs-down' call={ dislike }/>
				<FeedInteractionIcon name={'comment-icon-' + id} icon='far fa-comments' call={ comment }/>

				<span id = 'separator' className='mr-1'/>

				<FeedInteractionIcon name={'share-icon-' + id} icon='fas fa-share' call={ share }/>
			</div>

			<button className='btn btn-warning'> Plus..</button>
		</div>
	);
};

export default FeedInteractionsIcons;