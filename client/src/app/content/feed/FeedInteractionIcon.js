import React from "react";
import { bigIcon, like } from "../../scripts/feed_script";

class FeedInteractionIcon extends React.Component {

	finalName;

	componentDidMount() { this.finalName = this.props.name + '-' + this.props.id; }

	render() {
		return (
			<button className='transparent-button p-0' onClick={ () => { bigIcon( this.finalName ); like() } }>
				<i id={this.finalName} className={'feed-interactions-icons mr-1 ' + this.props.icon}/>
			</button>
		);
	}
}

export default FeedInteractionIcon;