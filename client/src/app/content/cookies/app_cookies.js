import Cookies from 'universal-cookie';

const appCookies = new Cookies('appCookies');

const isLogged = () => { return appCookies.get('isLogged') === 'true' };
const setLogged = ( isLogged ) => { appCookies.set('isLogged', isLogged )};

export { isLogged, setLogged };