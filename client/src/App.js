import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

import './App.css';

import Home from "./app/Home";
import MapDisplay from "./app/content/map/MapDisplay";
import UserProfile from "./app/content/profile/user/UserProfile";
import Feed from "./app/content/feed/Feed";
import LoginScreen from "./app/content/login/LoginScreen";
import RegisterScreen from "./app/content/register/RegisterScreen";
import Logout from "./app/content/Logout";

import { isLogged, setLogged } from "./app/content/util/app_cookies";
import AddEventScreen from "./app/content/map/AddEventScreen";
import MyActions from "./app/content/profile/user/actions/MyActions";
import RandomProfile from "./app/content/profile/randomProfile/RandomProfile";
import MyFriends from "./app/content/profile/user/friends/MyFriends";

class App extends React.Component {

    state = {
        mail: '',
        logged: false
    };

    componentDidMount() { if (! isLogged()) setLogged( false ); }

    render() {
        return (
            <Router>
                <Switch>
                    <route path='/friends'          > <Home content={ <MyFriends/> } />                                 </route>
                    <route path='/actions'          > <Home content={ <MyActions/> }/>                                  </route>
                    <route path='/profile/:id'      > <Home content={ <RandomProfile /> }/>                             </route>
                    <route path='/addevent'         > <AddEventScreen/>                                                 </route>
                    <Route path='/logout'           > <Logout />                                                        </Route>
                    <Route path="/register"         > <RegisterScreen />                                                </Route>
                    <Route path="/login"            > <LoginScreen />                                                   </Route>
                    <Route path="/profile"          > <Home content = { <UserProfile /> } />                            </Route>
                    <Route path="/map"              > <Home content = { <MapDisplay /> }/>                              </Route>
                    <Route path="/"                 > <Home content = { (isLogged()) ? <Feed /> : <LoginScreen /> }/>   </Route>
                </Switch>
            </Router>
        );
    }

    // verifyIsLogged = () => {
        // return ( appCookies.get( 'isLogged' ) === 'true' );
        // const payload = {mail: this.state.mail};
        // axios({
        //     url: '/api/verify',
        //     method: 'POST',
        //     data: payload
        // })
        //     .then((response) => {
        //         const data = response.data;
        //
        //         this.setState({mail: data.mail, logged: data.logged});
        //         this.forceUpdate();
        //     })
        //     .catch((error) => {
        //         console.log('Internal server error');
        //     });
    // };
}

export default App;
