import React from "react";

import Header from "./content/header/Header";
import ProfileBar from "./content/side_bars/profile_bar/ProfileBar";
import FriendsBar from "./content/side_bars/friends_bar/FriendsBar";
import SwapFeedButtons from "./content/swap_feed_buttons/SwapFeedButtons";

import './scripts/sideBars_script';
import './scripts/feed_script';

const Home = ({ content, logged }) => {
		return (
			<div className="d-flex">
				{ (logged) ? <ProfileBar/> : <></> }	{/* if not logged in, doens't show side bars*/}

				{/*dspvinpvn*/}

				<div className="d-flex flex-column w-100">
					<Header logged = { logged } />

					{ (logged) ? <SwapFeedButtons/> : <> </> }

					{ content }
				</div>

				{ (logged) ? <FriendsBar /> : <></> } 	{/* if not logged in, doens't show side bars*/}
			</div>
		);
};

export default Home;