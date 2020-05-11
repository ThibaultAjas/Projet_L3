import React from "react";

import Header from "./content/header/Header";
import ProfileBar from "./content/side_bars/profile_bar/ProfileBar";
import FriendsBar from "./content/side_bars/friends_bar/FriendsBar";
import {getUser, isLogged, setUser} from "./content/util/app_cookies";

import './scripts/sideBars_script';
import './scripts/feed_script';
import {getUserById} from "./content/util/dataConverter";


const Home = ({ content }) => {

	getUserById(getUser()._id).then(data => {
		setUser(data)
	}).catch(error => {
		console.log('Error: ', error)
	})

	return (
			<div className="d-flex">
				{ (isLogged()) ? <ProfileBar/> : <></> }	{/* if not logged in, doens't show side bars*/}

				<div className="d-flex flex-column w-100">
					<Header />

					{ content }
				</div>

				{ (isLogged()) ? <FriendsBar /> : <></> } 	{/* if not logged in, doens't show side bars*/}
			</div>
		);
};

export default Home;