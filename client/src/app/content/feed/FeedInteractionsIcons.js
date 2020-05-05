import React from "react";

import { like, bigIcon } from "../../scripts/feed_script";
import FeedInteractionIcon from "./FeedInteractionIcon";

const FeedInteractionsIcons = () => {
	return (
		<div className='d-flex flex-row align-items-baseline'>

			<div id='feed-interactions-div'>
				<FeedInteractionIcon name='like-icon' icon='far fa-thumbs-up'/>
				<FeedInteractionIcon name='dislike-icon' icon='far fa-thumbs-down' />
				<FeedInteractionIcon name='comment-icon' icon='far fa-comments' />

				<span id = 'separator'/>

				<FeedInteractionIcon name='favorite-icon' />
				<FeedInteractionIcon name='share-icon' />

				<button className='transparent-button p-0'> <i id='favorite-icon' 	className="feed-interactions-icons far fa-star mx-1"/> </button>
				<button className='transparent-button p-0'> <i id='share-icon' 		className="feed-interactions-icons fas fa-share mr-1"/> </button>
			</div>

			<button className='btn btn-warning'> Plus..</button>
		</div>
	);
};

export default FeedInteractionsIcons;