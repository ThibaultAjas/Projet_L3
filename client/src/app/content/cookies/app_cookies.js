import Cookies from 'universal-cookie';

const 	IS_LOGGED 	= 'isLogged',
		MAIL		= 'mail',
		PASSWORD	= 'password';

const appCookies = new Cookies('appCookies');

const isLogged = () => { return appCookies.get(IS_LOGGED) === 'true' };
const setLogged = ( isLogged ) => { appCookies.set(IS_LOGGED, isLogged )};

const setSessionMail = ( mail ) => { appCookies.set(MAIL, mail) };
const getSessionMail = () => { return appCookies.get(MAIL) };

const setSessionPassword = ( password ) => { appCookies.set(PASSWORD, password) };
const getSessionPassword = () => { return appCookies.get(PASSWORD) };

export
{
	isLogged, setLogged,
	setSessionMail, getSessionMail,
	setSessionPassword, getSessionPassword
};