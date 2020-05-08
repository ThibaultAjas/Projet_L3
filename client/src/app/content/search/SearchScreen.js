import React from "react";
import SearchResults from "./SearchResults";
import { getUser } from "../util/app_cookies";

class SearchScreen extends React.Component {
	state = {
		content: [],
		lookingForUser: false
	};

	searchEvent() {
		this.setState({ content: getUser().following });
		this.setState({ lookingForUser: false });
	}

	searchPerson() {
		this.setState({ content: getUser().following });
		this.setState({ lookingForUser: true });
	}

	render() {
		return (
			<>
				<div className='w-100 bg-secondary d-inline-flex justify-content-center p-3 align-items-center'>
					<input type='text' placeholder='person/event name' className='p-1 mr-2'/>
					<input type='button' className='p-1 btn btn-warning mr-2' onClick={() => this.searchPerson()} value='Search for person'/>
					<input type='button' className='p-1 btn btn-warning' onClick={() => this.searchEvent()} value='Search for event'/>
				</div>

				<SearchResults content={(this.state.content === undefined) ? [] : this.state.content} isUser={this.state.lookingForUser}/>
			</>
		);
	}
}

export default SearchScreen;