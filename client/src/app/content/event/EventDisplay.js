import React from "react";
import { getEventFromId } from "../util/dataConverter";

class EventDisplay extends React.Component {

	state = {
		event: {}
	};

	componentDidMount() {
		let url = new URL(window.location.href).pathname.substring(7);

		getEventFromId({_id: url }).then((data) => {
			this.setState({ event: data.data }); /* ou juste data ? */

			console.log(data);

			this.forceUpdate();
		})

	}

	render() {
		return (
			<div>{ this.state.event.description }</div>
			// <FeedLine element={this.state.event}/>
		);
	}
};

export default EventDisplay;