import React from "react";
import '../../stylesheets/header.css';

const Header = () => {
	return (
		<header className='bg-dark mx-auto w-100 px-2 d-flex justify-content-between'>

			<div id='profileBarActivators' className='pt-2 pb_activator'>
				<div id="header_show_profileBar" className='rounded-circle element'/>
				<i id="header_hide_profileBar" className='rounded-circle element fas fa-angle-double-left' style={{'display':'none'}}/>
			</div>

			<a id='h_title' href='#'><h1> G  R  E  T  A  G  R  A  M </h1></a>

			<div id='friendsBarActivators' className='pt-2 fb_activator'>
				<i id = "header_show_friendsBar" className='rounded-circle element fa fa-users'/>
				<i id = "header_hide_friendsBar" className='rounded-circle element fas fa-angle-double-right' style={{'display':'none'}}/>
			</div>
		</header>
	)
};

export default Header;