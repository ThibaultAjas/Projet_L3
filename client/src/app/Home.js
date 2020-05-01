import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

import React from "react";

import Header from "./content/header/Header";
import ProfileBar from "./content/side_bars/profile_bar/ProfileBar";
import FriendsBar from "./content/side_bars/friends_bar/FriendsBar";
import Feed from "./content/side_bars/feed/Feed";

import './scripts/home_script';

import '../App.css';

const Home = () => {
	return (
		<div className="d-flex">
			<ProfileBar/>
			<div className="d-flex flex-column w-100">
				<Header/>
				<Feed/>
			</div>
			<FriendsBar/>
		</div>
	);
};

export default Home;