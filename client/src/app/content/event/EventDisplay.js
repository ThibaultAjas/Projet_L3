import React from "react";
import { getEventFromId, getFriendsById, getUserEventList } from "../util/dataConverter";
import { getUser } from "../util/app_cookies";
import FeedLine from "../feed/FeedLine";

class EventDisplay extends React.Component {

	event = undefined;

	componentDidMount() {

		// console.log(new URL(window.location.href).pathname.substring(7));
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