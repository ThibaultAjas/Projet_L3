import $ from 'jquery';

let PROFILE_BAR;
let H_SHOW_PROFILE_BAR;
let H_HIDE_PROFILE_BAR;
let H_PROFILE_BAR_ACTIVATOR;
let FRIENDS_BAR;
let H_SHOW_FRIENDS_BAR;
let H_HIDE_FRIENDS_BAR;
let H_FRIENDS_BAR_ACTIVATOR;

let isProfileBarOpened = false;
let isFriendsBarOpened = false;

let moveSideBar = ( bar ) => {
	let marginSide = ( bar === PROFILE_BAR ) ? "margin-left" : "margin-right";
	let currentMargin = parseInt(bar.css(marginSide), 10);

	if ( bar === PROFILE_BAR ) {
		if ( marginSide === "margin-left" ) bar.animate({"margin-left" : (currentMargin === 0) ? '-300px' : '0'});
	} else if ( bar === FRIENDS_BAR ) {
		if ( marginSide === "margin-right" ) bar.animate({"margin-right" : (currentMargin === 0) ? '-300px' : '0'});
	}
};


let hide_hideIcon = ( iconToHide, iconToShow ) => {
	toggleElementVisibility( iconToShow, false );
	setTimeout( () => {
		toggleElementVisibility( iconToHide, true );
	}, 400);
};

let activateProfileBar = () => {
	if ( ! isFriendsBarOpened ) {
		isProfileBarOpened = ! isProfileBarOpened;
		moveSideBar( PROFILE_BAR );

		if (H_SHOW_PROFILE_BAR.is(':visible')) hide_hideIcon( H_HIDE_PROFILE_BAR, H_SHOW_PROFILE_BAR );
		else hide_hideIcon( H_SHOW_PROFILE_BAR, H_HIDE_PROFILE_BAR );
	}
};

let activateFriendsBar = () => {
	if (! isProfileBarOpened) {
		isFriendsBarOpened = ! isFriendsBarOpened;
		moveSideBar( FRIENDS_BAR );

		if (H_SHOW_FRIENDS_BAR.is(':visible')) hide_hideIcon( H_HIDE_FRIENDS_BAR, H_SHOW_FRIENDS_BAR );
		else hide_hideIcon( H_SHOW_FRIENDS_BAR, H_HIDE_FRIENDS_BAR );
	}
};

let activateSideBar = ( bar ) => {
	if ( bar === PROFILE_BAR ) {
		activateProfileBar();
	} else if ( bar === FRIENDS_BAR ) {
		activateFriendsBar();
	}
};

//	fade(Out/In) a list of elements
let toggleElementVisibility = ( element, toShow ) => {
	if (toShow) element.fadeIn(0);
	else 		element.fadeOut();
};

let initSideBarsComponents = (
	profileBar, profileBarActivators, profileBarShowIcon, profileBarHideIcon,
	friendsBar, friendsBarActivators, friendsBarShowIcon, friendsBarHideIcon ) => {

	PROFILE_BAR = profileBar;
	H_PROFILE_BAR_ACTIVATOR = profileBarActivators;
	H_HIDE_PROFILE_BAR = profileBarHideIcon;
	H_SHOW_PROFILE_BAR = profileBarShowIcon;
	FRIENDS_BAR = friendsBar;
	H_FRIENDS_BAR_ACTIVATOR = friendsBarActivators;
	H_HIDE_FRIENDS_BAR = friendsBarHideIcon;
	H_SHOW_FRIENDS_BAR = friendsBarShowIcon;
};

export { activateSideBar, initSideBarsComponents };