import React from "react";
import axios from 'axios';

import { getUser } from "../util/app_cookies";


class FeedInteractionIcon extends React.Component {

	state = {
		eventId: this.props.name.split("-")[2],
		action: this.props.name.split("-")[0]
	};

	componentDidMount() {
		if(this.props.isActioned) this.props.call(this.props.name);
	}

	makeAction = () => {
		
		const payload = {
			user: getUser(),
			event: {_id: this.state.eventId}
		};

		let url = '/event/';
		switch (this.state.action) {
			case 'like':
				url += 'likeEvent';
				break;
			case 'dislike':
				url += 'dislikeEvent';
				break;
			case 'comment':
				url += 'likeEvent';
				break;
			default: break;
		}
		
		axios({
			url: url,
			method: 'POST',
			data: payload
		})
			.then((response) => {
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

			<div>{this.props.value}</div>

			<button className='transparent-button p-0' onClick={() => {
				this.makeAction();
				this.props.call(this.props.name);
			}}>
				<i id={this.props.name} className={'feed-interactions-icons mr-1 ' + this.props.icon}/>
			</button>
		</span>
		);
	}
};

export default FeedInteractionIcon;