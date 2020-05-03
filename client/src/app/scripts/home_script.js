import $ from 'jquery';
import initSideBarsComponents from './sideBars_script';

$(document).ready( () => {
	const PROFILE_BAR = $('#profileBar');
	const H_PROFILE_BAR_ACTIVATOR = $('.pb-activator');
	const H_SHOW_PROFILE_BAR = $('#header-show-profileBar-icon');
	const H_HIDE_PROFILE_BAR = $('#header-hide-profileBar-icon');
	const FRIENDS_BAR = $('#friendsBar');
	const H_FRIENDS_BAR_ACTIVATOR = $('.fb-activator');
	const H_HIDE_FRIENDS_BAR = $("#header-hide-friendsBar-icon");
	const H_SHOW_FRIENDS_BAR = $("#header-show-friendsBar-icon");

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
});