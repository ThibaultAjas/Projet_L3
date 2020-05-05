import React from "react";

import Header from "./content/header/Header";
import ProfileBar from "./content/side_bars/profile_bar/ProfileBar";
import FriendsBar from "./content/side_bars/friends_bar/FriendsBar";
import SwapFeedButtons from "./content/swap_feed_buttons/SwapFeedButtons";
import { isLogged } from "./content/cookies/app_cookies";

import './scripts/sideBars_script';
import './scripts/feed_script';


const Home = ({ content }) => {
		return (
			<div className="d-flex">
				{ (isLogged()) ? <ProfileBar/> : <></> }	{/* if not logged in, doens't show side bars*/}

				<div className="d-flex flex-column w-100">
					<Header />

					{ (isLogged()) ? <SwapFeedButtons/> : <> </> }

					{ content }
				</div>

				{ (isLogged()) ? <FriendsBar /> : <></> } 	{/* if not logged in, doens't show side bars*/}
			</div>
		);
};

export default Home;