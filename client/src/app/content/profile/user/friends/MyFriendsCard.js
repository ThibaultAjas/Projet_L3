import React from "react";
import axios from 'axios';
import {getUser, setUser} from "../../../util/app_cookies";
import {unFollow} from "../../../util/dataConverter";

class MyFriendsCard extends React.Component {



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
					<button className='btn btn-danger' onClick={() => unFollow(this.props.friend._id)}> Unfollow </button>
				</div>
			</div>
		);
	}
};

export default MyFriendsCard;