import $ from 'jquery';
import { activateSideBar, initSideBarsComponents } from './sideBars_script';

$(document).ready( () => {
	const PROFILE_BAR = $('#profileBar');
	const H_PROFILE_BAR_ACTIVATOR = $('.pb-activator');
	const H_SHOW_PROFILE_BAR = $('#header-show-profileBar');
	const H_HIDE_PROFILE_BAR = $('#header-hide-profileBar');
	const FRIENDS_BAR = $('#friendsBar');
	const H_FRIENDS_BAR_ACTIVATOR = $('.fb-activator');
	const H_HIDE_FRIENDS_BAR = $("#header-hide-friendsBar");
	const H_SHOW_FRIENDS_BAR = $("#header-show-friendsBar");

	// init side bar js
	initSideBarsComponents(
		PROFILE_BAR,
		H_PROFILE_BAR_ACTIVATOR,
		H_HIDE_PROFILE_BAR,
		H_SHOW_PROFILE_BAR,
		FRIENDS_BAR,
		H_FRIENDS_BAR_ACTIVATOR,
		H_HIDE_FRIENDS_BAR,
		H_SHOW_FRIENDS_BAR
	);

	//	listeners
	H_PROFILE_BAR_ACTIVATOR.click( () => activateSideBar(PROFILE_BAR) );
	H_FRIENDS_BAR_ACTIVATOR.click( () => activateSideBar(FRIENDS_BAR) );
});