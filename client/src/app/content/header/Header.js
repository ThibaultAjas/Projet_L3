import React from "react";

import { getUser, isLogged } from "../util/app_cookies";

import '../../stylesheets/header.css';
import ProfilePic from "../profile/ProfilePic";
import SearchIcon from "../search/SearchIcon";


const Header = () => {
	return (
		<header className={'bg-dark mx-auto w-100 px-2 d-flex ' + ((isLogged()) ? 'justify-content-between' : 'justify-content-center')}>
			{
				(isLogged())	?
									<div id='profileBar-activators' className='pt-2 pb-activator'>
										<span id="header-show-profileBar-icon" ><ProfilePic userName={getUser().firstName} bgColor='#4b69ab' size='35px' textColor='#c49235'/></span>
										<i id="header-hide-profileBar-icon" className='rounded-circle element fas fa-angle-double-left' style={ { 'display': 'none' } } />
									</div>
								: <> </>
			}

			<a id='h-title' href='/'>
				<h1>
					<span id='G'>G</span>
					<span id='R'>R</span>
					<span id='E'>E</span>
					<span id='E2'>E</span>
					<span id='N'>N</span>
					<span id='S'>S</span>
					<span id='T'>T</span>
					<span id='A'>A</span>
					<span id='G2'>G</span>
					<span id='R2'>R</span>
					<span id='A2'>A</span>
					<span id='M'>M</span>
				</h1>
			</a>

			{
				(isLogged())	?
									<span className='d-inline-flex'>
										<a href='/friends/search' className='p-2 d-inline-flex align-items-center justify-content-center mr-2'>
											<span id='header-search-icon'> <SearchIcon/> </span>
										</a>
										<div id='friendsBar-activators' className='pt-2 fb-activator'>
											<i id="header-show-friendsBar-icon" className='rounded-circle element fa fa-users'/>
											<i id="header-hide-friendsBar-icon" className='rounded-circle element fas fa-angle-double-right' style={ { 'display': 'none' } }/>
										</div>
									</span>
								: <> </>
			}
		</header>
	)
};

export default Header;