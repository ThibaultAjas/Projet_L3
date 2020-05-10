import React from "react";
import { getEventFromId } from "../util/dataConverter";
import FeedLine from "../feed/FeedLine";

class EventDisplay extends React.Component {

	event = undefined;

	componentDidMount() {

		getEventFromId(new URL(window.location.href).pathname.substring(7)).then((data) => {
			this.event = data.data; /* ou juste data ? */
		})

	}

	render() {
		return (
			<FeedLine element={this.event}/>
		);
	}
};

export default EventDisplay;