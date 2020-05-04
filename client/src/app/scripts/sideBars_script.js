import $ from "jquery";
import IsAvailable from "../content/geolocation/IsAvailable";

$(document).ready( () => {
	const PROFILE_BAR = $('#profileBar');
	const H_PROFILE_BAR_ACTIVATOR = $('.pb-activator');
	const H_SHOW_PROFILE_BAR = $('#header-show-profileBar-icon');
	const H_HIDE_PROFILE_BAR = $('#header-hide-profileBar-icon');
	const FRIENDS_BAR = $('#friendsBar');
	const H_FRIENDS_BAR_ACTIVATOR = $('.fb-activator');
	const H_HIDE_FRIENDS_BAR = $("#header-hide-friendsBar-icon");
	const H_SHOW_FRIENDS_BAR = $("#header-show-friendsBar-icon");

	let isProfileBarOpened = false;
	let isFriendsBarOpened = false;

	console.log(H_HIDE_PROFILE_BAR.attr('id'));

	let moveSideBar = ( bar ) => {
		let marginSide = ( bar === PROFILE_BAR ) ? "margin-left" : "margin-right";
		let currentMargin = parseInt(bar.css(marginSide), 10);

		if ( bar === PROFILE_BAR ) {
			if ( marginSide === "margin-left" ) bar.animate({"margin-left" : (currentMargin === 0) ? '-300px' : '0'});
		} else if ( bar === FRIENDS_BAR ) {
			if ( marginSide === "margin-right" ) bar.animate({"margin-right" : (currentMargin === 0) ? '-300px' : '0'});
		}
	};

	/* toggle icons visibility */
	let toggleIcons = ( iconToHide, iconToShow ) => {
		/* hide element */
		toggleElementVisibility( iconToHide, false );

		/* after 400 ms, show another one */
		setTimeout( () => {
			toggleElementVisibility( iconToShow, true );
		}, 400);
	};

	let activateProfileBar = () => {
		if ( ! isFriendsBarOpened ) {
			isProfileBarOpened = ! isProfileBarOpened;
			moveSideBar( PROFILE_BAR );

			if (H_SHOW_PROFILE_BAR.is(':visible')) toggleIcons( H_SHOW_PROFILE_BAR, H_HIDE_PROFILE_BAR );
			else toggleIcons( H_HIDE_PROFILE_BAR, H_SHOW_PROFILE_BAR  );
		}

		console.log(H_HIDE_PROFILE_BAR);
	};

	let activateFriendsBar = () => {
		if (! isProfileBarOpened) {
			isFriendsBarOpened = ! isFriendsBarOpened;
			moveSideBar( FRIENDS_BAR );

			if (H_SHOW_FRIENDS_BAR.is(':visible')) toggleIcons( H_SHOW_FRIENDS_BAR, H_HIDE_FRIENDS_BAR );
			else toggleIcons( H_HIDE_FRIENDS_BAR, H_SHOW_FRIENDS_BAR );
		}
	};

	let activateSideBar = ( bar ) => {
		if ( bar === PROFILE_BAR ) {
			activateProfileBar();
		} else if ( bar === FRIENDS_BAR ) {
			activateFriendsBar();
		}
	};

	let toggleElementVisibility = ( element, toShow ) => {
		if (toShow) element.fadeIn(0);
		else 		element.fadeOut();
	};

	IsAvailable();
	H_PROFILE_BAR_ACTIVATOR.click( () => activateProfileBar(PROFILE_BAR) );
	H_FRIENDS_BAR_ACTIVATOR.click( () => activateSideBar(FRIENDS_BAR) );
});