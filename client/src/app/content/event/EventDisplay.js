import React from "react";
import { getDateFrom, getEventFromId } from "../util/dataConverter";
import FeedLine from "../feed/FeedLine";
import { toggleOptionsPopupDisplay } from "../../scripts/feed_script";
import FeedLinePost from "../feed/FeedLinePost";
import FeedInteractionsIcons from "../feed/FeedInteractionsIcons";

class EventDisplay extends React.Component {

	state = {
		event: undefined
	};



	componentDidMount() {
		let url = new URL(window.location.href).pathname.substring(7);

		getEventFromId({_id: url }).then((data) => {
			this.setState({ event: data });
		});
	}

	render() {
		if (this.state.event) {
			return (
				<div className='card p-2 w-75 mx-auto mt-5'>
					<div className='card-title d-flex flex-row align-items-baseline justify-content-between border-bottom'>
						<div className='d-inline-flex align-items-baseline'>
							<h1> { this.state.event.title }</h1>
							<i className="fas fa-map-marker-alt ml-3 mr-1" style={{color: 'indianred'}}/>
							<blockquote className='blockquote font-italic' style={{'fontSize':'.8em'}}> { this.state.event.city }, { this.state.event.country } </blockquote>
						</div>
						<div className='font-italic'> posté le {getDateFrom(new Date( this.state.event.dateAdded)) } </div>
					</div>

					<div className='card-body text-muted p-0 pb-2 d-inline-flex'>
						<div id='description-div' className='flex-wrap'>
							<blockquote className='blockquote-footer m-0 font-italic'> le { getDateFrom(new Date(this.state.event.dateAdded)) } </blockquote>
							{ this.state.event.description }
						</div>
					</div>

					<FeedInteractionsIcons id={ this.state.event._id } likes={ this.state.event.likes } dislikes={ this.state.event.dislikes } buttonTitle='Voir le profil utilisateur'/>
				</div>
			);
		}

		return (
			<></>
		);
	}
}

export default EventDisplay;