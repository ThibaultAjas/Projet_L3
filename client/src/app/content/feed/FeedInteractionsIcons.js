import React from "react";
import axios from "axios";

import FeedInteractionIcon from "./FeedInteractionIcon";
import { like, dislike, comment, share } from "../../scripts/feed_script";
import {getUser} from "../util/app_cookies";

// ({ id, dislikes, likes, comments })
class FeedInteractionsIcons extends React.Component {

	render() {

		return (
			<div className='d-flex flex-row align-items-baseline'>

				<div id='feed-interactions-div'>
					<FeedInteractionIcon name={'like-icon-' + this.props.id} icon='far fa-thumbs-up' call={ like } value={this.props.likes} isActioned={ this.props.isLiked }/>
					<FeedInteractionIcon name={'dislike-icon-' + this.props.id} icon='far fa-thumbs-down' call={ dislike } value={this.props.dislikes} isActioned={ this.props.isDisliked }/>
					<FeedInteractionIcon name={'comment-icon-' + this.props.id} icon='far fa-comments' call={ comment } value={this.props.comments}/>

					<span id = 'separator' className='mr-1'/>

					<FeedInteractionIcon name={'share-icon-' + this.props.id} icon='fas fa-share' call={ share }/>
				</div>

				<a className='btn btn-warning' href={'/event/' + this.props.id}> Plus..</a>
			</div>
		);
	}
};

export default FeedInteractionsIcons;