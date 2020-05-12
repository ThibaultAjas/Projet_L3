import React from "react";

import FeedInteractionIcon from "./FeedInteractionIcon";
import { dislike, like } from "../../scripts/feed_script";

// ({ id, dislikes, likes, comments })
class FeedInteractionsIcons extends React.Component {

	render() {
		return (
			<div className='d-flex flex-row align-items-baseline'>

				<div id='feed-interactions-div'>
					<FeedInteractionIcon  event={this.props.event} name={'like-icon-' + this.props.id} icon='far fa-thumbs-up' call={ like } value={this.props.likes} isActioned={ this.props.isLiked }/>
					<FeedInteractionIcon name={'dislike-icon-' + this.props.id} icon='far fa-thumbs-down' call={ dislike } value={this.props.dislikes} isActioned={ this.props.isDisliked }/>
					{/*<FeedInteractionIcon name={'comment-icon-' + this.props.id} icon='far fa-comments' call={ comment } value={this.props.comments}/>*/}

					{/*<span id = 'separator' className='mr-1'/>*/}

					{/*<FeedInteractionIcon name={'share-icon-' + this.props.id} icon='fas fa-share' call={ share }/>*/}
				</div>

				<a className='btn btn-warning'
				   href={ (this.props.buttonHref) ? this.props.buttonHref : ('/event/' + this.props.id)}>
						{ (this.props.buttonTitle) ? this.props.buttonTitle : 'Plus..' }
				</a>
			</div>
		);
	}
};

export default FeedInteractionsIcons;