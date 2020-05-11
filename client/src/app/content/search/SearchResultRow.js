import React from "react";

const SearchResultRow = ({ content, isUser, search }) => {

	const boldText = (text, shallBeBold) => {
		const textArray = text.toLowerCase().split(shallBeBold.toLowerCase());

		return (
			<span>
				{textArray.map((item, index) => (
					<>
						{item}
						{index !== textArray.length - 1 && (
							<b>{shallBeBold}</b>
						)}
					</>
				))}
			</span>
		);
	};

	if (isUser) {
		return (
			<div className='d-inline-flex justify-content-between border-bottom align-items-center w-50 m-auto bg-light px-2'>
				<div className='d-inline-flex align-items-baseline pt-3'>
					<p> {boldText(content.firstName, search)} {boldText(content.lastName, search)} </p>
					<blockquote className='blockquote-footer ml-2'> {boldText(content.userName, search)}</blockquote>
				</div>

				<a href={'/profile/' + content._id} className='btn btn-warning btn-sm'> See profile </a>
			</div>
		)
	}

	return (
		<div className='d-inline-flex justify-content-between border-bottom align-items-center w-50 m-auto bg-light px-2'>
			<p className='pt-3 text-center'> { boldText(content.title, search) } </p>

			<div className='d-inline-flex align-items-center overflow-auto pt-3 mx-3' >
				<blockquote className='blockquote-footer ml-2 overflow-hidden' style={{maxHeight: '20px'}}> { content.description }  </blockquote>
			</div>

			<a href={'/profile/' + content._id} className='btn btn-warning btn-sm'> See event </a>
		</div>
	)
};

export default SearchResultRow;