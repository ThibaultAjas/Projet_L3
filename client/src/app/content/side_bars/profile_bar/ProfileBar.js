import React from "react";
import ProfileBarTopSection from "./ProfileBarTopSection";
import ProfileBarContent from "./ProfileBarContent";

import '../../../stylesheets/side_bars.css';

const log_content = [
	{ 	'name' : 'Profil',
		'icon' : 'fa fa-user mr-3',
		'href' : '/profile'
	},
	{ 	'name' : 'Mes actions',
		'icon' : 'fa fa-thumbs-up mr-3',
		'href' : '/profile/actions'
	},
	{ 	'name' : 'Mes amis',
		'icon' : 'fa fa-users mr-3',
		'href' : '/profile/friends'
	},
	{ 	'name' : 'Paramètres',
		'icon' : 'fa fa-cog mr-3',
		'href' : '/profile/settings'
	},
	{ 	'name' : 'Se déconnecter',
		'icon' : 'fa fa-sign-out-alt mr-3',
		'href' : '/logout'
	}
];

const ProfileBar = () => {

	return (
			<nav id='profileBar' className='d-flex flex-column profileBar-hidden'>
				<ProfileBarTopSection/>
				<ProfileBarContent content={log_content}/>
			</nav>
	);
};

export default ProfileBar;