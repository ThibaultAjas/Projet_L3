import React from "react";
import SearchResults from "./SearchResults";
import { getUser } from "../util/app_cookies";
import { search_user } from "../util/search";

class SearchScreen extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			content: [],
			lookingForUser: true
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.setState({ content: search_user('') });
	}

	handleChange({ target }) {
		const { name, value } = target;
		this.setState({ content:  search_user(value)});
	}

	searchUser() {
		this.setState({ content: search_user('aze')});
		this.setState({ lookingForUser: true })}
	searchEvent() { this.setState({ lookingForUser: false })}

	render() {
		return (
			<>
				<div className='w-100 bg-secondary d-inline-flex justify-content-center p-3 align-items-center'>
					<input type='text' placeholder='person/event name' name='content' className='p-1 mr-2' onChange={this.handleChange} />

					<input type='button' className='p-1 btn btn-warning mr-2' value='Search for person' onClick={() => this.searchUser()}/>
					<input type='button' className='p-1 btn btn-warning' onClick={() => this.searchEvent()} value='Search for event'/>
				</div>

				{/*<SearchResults content={getUser().following} isUser={this.state.lookingForUser}/>*/}

				{ this.state.content.map((state) => console.log(state)) }
			</>
		);
	}
}

export default SearchScreen;