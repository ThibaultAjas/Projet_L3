import React, { useState } from "react";
import axios from 'axios';

import {like} from "../../scripts/feed_script";
import {getUser, setUser} from "../util/app_cookies";


class FeedInteractionIcon extends React.Component {

	state = {
		eventId: this.props.name.split("-")[2],
		action: this.props.name.split("-")[0]
	};

	componentDidMount() {
		let prop = '';
		const event = getUser().events.find((evt) => evt.event === this.props.name.split("-")[2]);
		// console.log(this.props.name, ' => ', this.props.name.split("-")[2])
		// console.log(getUser().events)
		switch (this.state.action) {
			case 'like':
				prop = 'liked';
				break;
			case 'dislike':
				prop = 'disliked';
				break;
			case 'comment':
				prop = 'comment';
				break;
		}
		console.log('evt: ', event)
		const actioned = (event) ? event[prop] : false;
		if (actioned) this.props.call(this.props.name);
	};

	makeAction = () => {
		
		const payload = {
			user: getUser(),
			event: {_id: this.state.eventId}
		};

		let url = '';
		switch (this.state.action) {
			case 'like':
				url = '/user/likeEvent';
				break;
			case 'dislike':
				url = '/user/dislikeEvent';
				break;
			case 'comment':
				url = '/user/likeEvent';
				break;
		}
		axios({
			url: url,
			method: 'POST',
			data: payload
		})
			.then((response) => {
				console.log("user",getUser().events[getUser().events.length - 1].disliked);
				setUser(response.data.data);


				this.forceUpdate();
			})
			.catch((error) => {
				console.log('Error: ', error);
			})
	};

	render() {
		return (
			<span className='d-inline-flex align-items-baseline'>
			<p className='ml-1'> {} </p>

			<button className='transparent-button p-0' onClick={() => {
				this.makeAction()
				this.props.call(this.props.name);
			}}>
				<i id={this.props.name} className={'feed-interactions-icons mr-1 ' + this.props.icon}/>
			</button>
		</span>
		);
	}
};

export default FeedInteractionIcon;