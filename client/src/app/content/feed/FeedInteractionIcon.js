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
		const actioned = getUser().events.find((evt) => evt.event === this.props.name.split("-")[2])[prop];
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
				setUser(response.data.data)

				console.log(getUser().events[getUser().events.length - 1])
				this.forceUpdate();
			})
			.catch((error) => {
				console.log('Error: ', error);
			})
	};

	render() {
		// TODO: change it depending if the user liked it or nah, not with pure boolean
		// let [alreadyPressed, setPressed] = useState(false);
		// let [currentValue, setCurrentValue] = useState(this.props.value);
		//
		// let updateValue = () => {
		// 	this.likeEvt()
		// 	if (alreadyPressed) {
		// 		setCurrentValue(currentValue - 1);
		// 	} else setCurrentValue(currentValue + 1);
		//
		// 	setPressed(!alreadyPressed);
		// };

		return (
			<span className='d-inline-flex align-items-baseline'>
			<p className='ml-1'> {} </p>

			<button className='transparent-button p-0' onClick={() => {
				this.makeAction()
				this.props.call(this.props.name);
				// updateValue();
			}}>
				<i id={this.props.name} className={'feed-interactions-icons mr-1 ' + this.props.icon}/>
			</button>
		</span>
		);
	}
};

export default FeedInteractionIcon;