import React from "react";

import '../../../stylesheets/random_user.css';
import RandomProfileActionBar from "./RandomProfileActionBar";
import ProfilePic from "../ProfilePic";

class RandomProfileHeader extends React.Component {
	render() {
		return (
			<div id='random-user-header' className='w-100 d-flex align-items-center pl-3'>
				<span id='random-user-pic' className='d-inline-flex align-items-center'>
					<ProfilePic userName={this.props.firstName} textColor='#a87656' bgColor='#e0bb82' size='100px'/>
					<h1 className='ml-2'> { this.props.firstName } { this.props.lastName } ( { this.props.userName } )</h1>
				</span>
				<RandomProfileActionBar id={this.props.id}/>
			</div>
		);
	}
}

export default RandomProfileHeader;