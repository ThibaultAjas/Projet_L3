import React from "react";

import Header from "./content/header/Header";
import ProfileBar from "./content/side_bars/profile_bar/ProfileBar";
import FriendsBar from "./content/side_bars/friends_bar/FriendsBar";
import Feed from "./content/feed/Feed";

import './scripts/home_script';
import './scripts/sideBars_script';

import MapDisplay from "./content/map/MapDisplay";
import SwapFeedButtons from "./content/swap_feed_buttons/SwapFeedButtons";

const Home = ({ map }) => {
		return (
			<div className="d-flex">
				<ProfileBar/>
				<div className="d-flex flex-column w-100">
					<Header/>
					<SwapFeedButtons/>
					{(map) ? <MapDisplay/> : <Feed/>}
				</div>
				<FriendsBar/>
			</div>
		);
};

export default Home;