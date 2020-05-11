import Cookies from 'universal-cookie';

/* define const to avoid typing errors */
const 	IS_LOGGED 	= 'isLogged',
		MAIL		= 'mail',
		PASSWORD	= 'password',
		USER		= 'user';

/* create and instantiate cookies */
const appCookies = new Cookies('appCookies');



/* Check and set if user is logged  */
const isLogged = () => { return appCookies.get(IS_LOGGED) === 'true' };
const setLogged = ( isLogged ) => { appCookies.set(IS_LOGGED, isLogged ,{path:'/'})};

/* get and set session mail */
const setSessionMail = ( mail ) => { appCookies.set(MAIL, mail,{path:'/'}) };
const getSessionMail = () => { return appCookies.get(MAIL) };

/* get and set session password */
const setSessionPassword = ( password ) => { appCookies.set(PASSWORD, password,{path:'/'}) };
const getSessionPassword = () => { return appCookies.get(PASSWORD) };

/* get and set user */
const setUser = (user) => { appCookies.set(USER, user, {path:'/', domain:'localhost'}); console.log("salope tu vas marcher",user) };
const getUser = () => { return new Cookies('appCookies').get(USER) };

export
{
	isLogged, setLogged,
	setSessionMail, getSessionMail,
	setSessionPassword, getSessionPassword,
	setUser, getUser
};