import React from "react";
import ProfileBarElementRow from "./ProfileBarElementRow";

const elements = [
	{ 	'name' : 'Profile',
		'icon' : 'fa fa-user mr-3'
	},
	{ 	'name' : 'Mes actions',
		'icon' : 'fa fa-thumbs-up mr-3'
	},
	{ 	'name' : 'Mes amis',
		'icon' : 'fa fa-users mr-3'
	},
	{ 	'name' : 'Paramètres',
		'icon' : 'fa fa-cog mr-3'
	},
	{ 	'name' : 'Se déconnecter',
		'icon' : 'fa fa-sign-out-alt mr-3'
	}
];

const ProfileBarContent = () => {
	return (
		<ul className='list-group'>
			{
				elements.map( element => <ProfileBarElementRow key = {element.name} content = {element.name} icon = {element.icon} /> )
			}
		</ul>
	);
};

export default ProfileBarContent;