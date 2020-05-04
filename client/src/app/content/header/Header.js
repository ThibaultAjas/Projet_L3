import React from "react";
import '../../stylesheets/header.css';

const Header = ({ logged }) => {
	return (
		<header className={'bg-dark mx-auto w-100 px-2 d-flex ' + ((logged) ? 'justify-content-between' : 'justify-content-center')}>
			{
				(logged)	?
								<div id='profileBar-activators' className='pt-2 pb-activator'>
									<div id="header-show-profileBar-icon" className='rounded-circle element'/>
									<i id="header-hide-profileBar-icon" className='rounded-circle element fas fa-angle-double-left'
									   style={ { 'display': 'none' } }/>
								</div>
							: <> </>
			}

			{/* conso*/}

			<a id='h-title' href='/'><h1> GREENSTAGRAM </h1></a>

			{
				(logged)	?
								<div id='friendsBar-activators' className='pt-2 fb-activator'>
									<i id="header-show-friendsBar-icon" className='rounded-circle element fa fa-users'/>
									<i id="header-hide-friendsBar-icon" className='rounded-circle element fas fa-angle-double-right'
									   style={ { 'display': 'none' } }/>
								</div>
							: <> </>
			}
		</header>
	)
};

export default Header;