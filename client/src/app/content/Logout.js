import React from "react";
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

class Logout extends React.Component {
	componentDidMount() { new Cookies('appCookies').set('isLogged', false); }
	render() { return <Redirect to='/login'/> }
}

export default Logout;