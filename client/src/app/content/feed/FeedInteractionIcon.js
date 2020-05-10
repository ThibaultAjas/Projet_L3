import React, { useState } from "react";
import axios from 'axios';

import {like} from "../../scripts/feed_script";
import {getUser} from "../util/app_cookies";


class FeedInteractionIcon extends React.Component {

	state = {
		eventId: this.props.name.split("-")[2],
		liked: getUser().events.find((evt) => evt.event = this.props.name.split("-")[2]).liked,
		disliked: getUser().events.find((evt) => evt.event = this.props.name.split("-")[2]).disliked
	};

	componentDidMount() {
		console.log(getUser())
	};

	makeAction = () => {
		const action = this.props.name.split("-")[0];
		// const idEvt = this.props.name.split("-")[2];
		
		const payload = {
			user: getUser(),
			event: {_id: this.state.eventId}
		};

		let url = '';
		switch (action) {
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
				console.log(response)
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
				this.props.call(this.props.name);
				// updateValue();
				this.makeAction()
			}}>
				<i id={this.props.name} className={'feed-interactions-icons mr-1 ' + this.props.icon}/>
			</button>
		</span>
		);
	}
};

export default FeedInteractionIcon;