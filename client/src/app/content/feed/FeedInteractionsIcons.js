import React from "react";

import FeedInteractionIcon from "./FeedInteractionIcon";
import { like, dislike, comment, share } from "../../scripts/feed_script";

const FeedInteractionsIcons = ({ id, dislikes, likes, comments }) => {
	return (
		<div className='d-flex flex-row align-items-baseline'>

			<div id='feed-interactions-div'>
				<FeedInteractionIcon name={'like-icon-' + id} icon='far fa-thumbs-up' call={ like } value={likes}/>
				<FeedInteractionIcon name={'dislike-icon-' + id} icon='far fa-thumbs-down' call={ dislike } value={dislikes}/>
				<FeedInteractionIcon name={'comment-icon-' + id} icon='far fa-comments' call={ comment } value={comments}/>

				<span id = 'separator' className='mr-1'/>

				<FeedInteractionIcon name={'share-icon-' + id} icon='fas fa-share' call={ share }/>
			</div>

			<a className='btn btn-warning' href={'/event/' + id}> Plus..</a>
		</div>
	);
};

export default FeedInteractionsIcons;