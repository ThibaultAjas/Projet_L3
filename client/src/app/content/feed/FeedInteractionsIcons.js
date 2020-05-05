import React from "react";

const FeedInteractionsIcons = () => {
	return (
		<div className='d-flex flex-row align-items-baseline'>

			<div id='feed-interactions-div'>
				<i id='like-icon' 		className="feed-interactions-icons far fa-thumbs-up mr-2"/>
				<i id='dislike-icon' 	className="feed-interactions-icons far fa-thumbs-down mr-2"/>
				<i id='comment-icon' 	className="feed-interactions-icons far fa-comments mr-2"/>

				<span id = 'separator'/>

				<i id='favorite-icon' 	className="feed-interactions-icons far fa-star mx-2"/>
				<i id='share-icon' 		className="feed-interactions-icons fas fa-share mr-2"/>
			</div>

			<button className='btn btn-warning'> Plus..</button>
		</div>
	);
};

export default FeedInteractionsIcons;