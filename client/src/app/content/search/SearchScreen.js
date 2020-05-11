import React from "react";
import SearchResults from "./SearchResults";
import { search_user } from "../util/search";

class SearchScreen extends React.Component {

	constructor(props) {
		super( props );

		this.state = {
			content: [],
			lookingForUser: true
		};

		this.search = '';
		this.handleChange = this.handleChange.bind(this);
	}



	componentDidMount() {
		search_user(this.search).then((data) => {
			this.setState({ content: data});
			this.forceUpdate();
		});
	}


	handleChange({ target }) {
		const { name, value} = target;

		search_user(value).then((data) => {
			this.setState({ content: data });
		});

		this.search = value;
	}

	searchPerson() { this.setState({ lookingForUser: true}); }
	searchEvent() { this.setState({ lookingForUser: false}); }


	render() {
		return (
			<>
				<div className='w-100 bg-secondary d-inline-flex justify-content-center p-3 align-items-center' style={{position: 'sticky', top: '50px'}}>
					<input type='text' placeholder='person/event name' className='p-1 mr-2' name='x' onChange={this.handleChange}/>
					<input type='button' className='p-1 btn btn-warning mr-2' onClick={() => this.searchPerson()} value='Search for person'/>
					<input type='button' className='p-1 btn btn-warning' onClick={() => this.searchEvent()} value='Search for event'/>
				</div>

				<SearchResults content={(this.state.content === undefined) ? [] : this.state.content} isUser={this.state.lookingForUser} search={this.search}/>
			</>
		);
	}
}

export default SearchScreen;