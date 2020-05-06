import React from "react";

import '../../../stylesheets/random_user.css';
import RandomProfileActionBar from "./RandomProfileActionBar";
import ProfilePic from "../ProfilePic";
import { getFriendsById } from "../../util/dataConverter";

class RandomProfileHeader extends React.Component {
	state = { user: {} };
	name = '';

	componentDidMount() {
		getFriendsById( [ new URL(window.location.href).pathname.substring(9) ] )
			.then( (data) => {
				this.setState({ user: data[0] });
				this.name = this.state.user.userName;
				this.forceUpdate();
			});
	}

	render() {
		return (
			<div id='random-user-header' className='w-100 d-flex align-items-center pl-3'>
				<span id='random-user-pic'><ProfilePic userName={this.name} textColor='#a87656' bgColor='#e0bb82' size='100px'/></span>
				<RandomProfileActionBar />
			</div>
		);
	}
}

export default RandomProfileHeader;