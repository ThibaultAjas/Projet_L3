import React from "react";
import ProfileCard from "./ProfileCard";

import '../../stylesheets/profile.css';

const CARDS = [
	{
		'title' : "Mes informations",
		'descr' : "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
		'href'  : '/profile/about-me'
	}, {
		'title' : "Mes actions",
		'descr' : "xxx",
		'href'  : '/profile/actions'
	}, {
		'title' : "Paramètres",
		'descr' : "xxx",
		'href'  : '/profile/settings'
	}, {
		'title' : "Mes amis",
		'descr' : "xxx",
		'href'  : '/profile/friends'
	}
];


const UserProfile = () => {
	return (
		<div className='w-75 mx-auto d-flex flex-wrap justify-content-start'>
			{  CARDS.map( (card) => <ProfileCard title={card.title} descr={card.descr} href={card.href}/> ) }
		</div>
	);
};

export default UserProfile;