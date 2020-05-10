import React from "react";

const MyFriendsCard = ({ friend }) => {
	return (
		<div className='friend-card px-5 py-2 bg-light m-2 text-center'>
			 <span className='d-inline-flex align-items-baseline flex-wrap'>
				 <h5> {friend.firstName} {friend.lastName} </h5>
				 <blockquote className='font-italic ml-2 blockquote-footer'> {friend.userName} </blockquote>

			 </span>

			<div className='d-flex justify-content-center flex-wrap'>
				<button className='btn btn-warning mr-2'> See profile </button>
				<button className='btn btn-danger'> Unfollow </button>
 			</div>
		</div>
	)
};

export default MyFriendsCard;