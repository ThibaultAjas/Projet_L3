import React from "react";
import axios from 'axios';
import {getUser, setUser} from "../../../util/app_cookies";

class MyFriendsCard extends React.Component {

	unfollow = () => {
		const payload = {
			user1: getUser(),
			user2: {_id: this.props.userID}
		};
		axios({
			url: '/user/unfollow',
			method: 'POST',
			data: payload
		})
			.then(response => {
				console.log('Friend not followed anymore ', response);
				setUser(response.data.data);
				this.forceUpdate();
			})
			.catch(error => {
				console.log('Error: ', error);
			})
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('oui')
	}

	render() {
		return (
			<div className='friend-card px-5 py-2 bg-light m-2 text-center'>
			 <span className='d-inline-flex align-items-baseline flex-wrap'>
				 <h5> {this.props.friend.firstName} {this.props.friend.lastName} </h5>
				 <blockquote className='font-italic ml-2 blockquote-footer'> {this.props.friend.userName} </blockquote>

			 </span>

				<div className='d-flex justify-content-center flex-wrap'>
					<a className='btn btn-warning mr-2' href={'/profile/' + this.props.friend._id}> See profile </a>
					<button className='btn btn-danger' onClick={this.unfollow}> Unfollow </button>
				</div>
			</div>
		);
	}
};

export default MyFriendsCard;