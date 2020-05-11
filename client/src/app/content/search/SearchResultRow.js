import React from "react";
import { getUser } from "../util/app_cookies";

const SearchResultRow = ({ content, isUser, search }) => {
	if (isUser) {
		console.log('xd: ', search);

		return (
			<div className='d-inline-flex justify-content-between border-bottom align-items-center w-50 m-auto bg-light px-2'>
				<div className='d-inline-flex align-items-baseline pt-3'>
					<h5>{content.firstName} {content.lastName}</h5>
					<blockquote className='blockquote-footer ml-2'> {content.userName}</blockquote>
				</div>

				<a href={'/profile/' + content._id} className='btn btn-warning btn-sm'> See profile </a>
			</div>

	)
	}

	return (
		<div className='d-inline-flex align-items-center m-auto bg-white w-50 p-2'>
			event: { content }
		</div>
	)
};

export default SearchResultRow;