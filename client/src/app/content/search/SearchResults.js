import React from "react";
import SearchResultRow from "./SearchResultRow";
import { getUser } from "../util/app_cookies";

const SearchResults = ({ content, isUser, search}) => {

	return (
		<ul className='d-flex flex-column mt-5 p-0'>
			{ content.map( ( stuff ) => <SearchResultRow content={ stuff } isUser={ isUser }/> ) }
		</ul>
	);
};

export default SearchResults;