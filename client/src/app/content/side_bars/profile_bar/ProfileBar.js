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

const not_log_content =
	[
		{ 	'name' : 'Créer un compte',
			'icon' : 'fas fa-hand-point-right mr-3',
			'href' : '/register'
		}
	];

const ProfileBar = ({ logged }) => {
	let content;

	if (logged) {
		content = log_content;
	} else {
		content = not_log_content;
	}

	return (
			<nav id='profileBar' className='d-flex flex-column profileBar-hidden'>
				{
					(logged)	? 	<>
										<ProfileBarTopSection/>
									</>
								:	<>
										{/*login*/}
									</>
				}
				<ProfileBarContent content={content}/>
			</nav>
	);
};

export default ProfileBar;