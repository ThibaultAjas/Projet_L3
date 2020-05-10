import React from "react";

const SearchResultRow = ({ content, isUser }) => {
	if (isUser) {
		return (
			<div className='d-inline-flex align-items-center m-auto bg-white w-50 p-2'>
				{console.log('coucou')} burp
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