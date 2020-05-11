import React from "react";
import SearchResults from "./SearchResults";
import { search_event, search_user } from "../util/search";

class SearchScreen extends React.Component {

	constructor(props) {
		super( props );

		this.state = {
			usersContent: [],
			eventsContent: [],
			lookingForUser: true
		};

		this.search = '';
		this.handleChange = this.handleChange.bind(this);
	}



	componentDidMount() {
		search_user(this.search).then((data) => this.setState({ usersContent: data}));
		search_event(this.search).then((data) => this.setState({ eventsContent: data}));

		this.forceUpdate();
	}


	handleChange({ target }) {
		const { name, value} = target;

		this.search = value;

		search_user(this.search).then((data) => this.setState({ usersContent: data}));
		search_event(this.search).then((data) => this.setState({ eventsContent: data}));
	}

	searchPerson() {
		this.setState({ lookingForUser: true});
	}
	searchEvent() {
		this.setState({ lookingForUser: false});
	}


	render() {
		return (
			<>
				<div className='w-100 bg-secondary d-inline-flex justify-content-center p-3 align-items-center' style={{position: 'sticky', top: '50px'}}>
					<input type='text' placeholder='person/event name' className='p-1 mr-2' name='x' onChange={this.handleChange}/>

					{ (this.state.lookingForUser)
						? <input type='button' className='p-1 btn btn-warning' onClick={() => this.searchEvent()} value='Search for events'/>
						: <input type='button' className='p-1 btn btn-warning mr-2' onClick={() => this.searchPerson()} value='Search for users'/>
					}
				</div>

				<h1 className='text-center mt-2'> Currently looking for {(this.state.lookingForUser) ? 'users' : 'events'}</h1>

				<SearchResults content={ (this.state.lookingForUser ? this.state.usersContent : this.state.eventsContent ) } isUser={this.state.lookingForUser} search={this.search}/>
			</>
		);
	}
}

export default SearchScreen;