import React from "react";
import ProfileBarTopSection from "./ProfileBarTopSection";
import ProfileBarContent from "./ProfileBarContent";

import '../../../stylesheets/side_bars.css';
import {getUser, isLogged} from "../../util/app_cookies";

const log_content = [
	{ 	'name' : 'Accueil',
		'icon' : 'fa fa-home mr-3',
		'href' : '/'
	},
	{ 	'name' : 'Profil',
		'icon' : 'fa fa-user mr-3',
		'href' : '/profile'
	},
	{ 	'name' : 'Mes actions',
		'icon' : 'fa fa-thumbs-up mr-3',
		'href' : '/actions'
	},
	{ 	'name' : 'Mes abonnements',
		'icon' : 'fa fa-users mr-3',
		'href' : '/friends'
	},
	{ 	'name' : 'Se déconnecter',
		'icon' : 'fa fa-sign-out-alt mr-3',
		'href' : '/logout'
	}
];
if(isLogged()) {
	if (getUser().isAdmin) {
		log_content.splice(4, 0, {
			'name': 'Statistics',
			'icon': 'far fa-chart-bar mr-3',
			'href': '/stats'
		})
	}
};
const ProfileBar = () => {

	return (
			<nav id='profileBar' className='d-flex flex-column profileBar-hidden'>
				<ProfileBarTopSection/>
				<ProfileBarContent content={log_content}/>
			</nav>
	);
};

export default ProfileBar;