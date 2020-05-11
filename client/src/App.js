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
import SearchScreen from "./app/content/search/SearchScreen";
import StatsDisplay from "./app/content/statistics/StatsDisplay";
import EventDisplay from "./app/content/event/EventDisplay";
import ProfileMap from "./app/content/profile/profile_map/ProfileMap";

class App extends React.Component {

    state = {
        mail: '',
        logged: false
    };

    componentDidMount() {
        if (isLogged() === undefined || ! isLogged()) {
            setLogged( false );
        }
    }

    render() {
        return (
                <Router>
                <Switch>
                    <Route path='/profile/map'      > <Home content={<ProfileMap />} />                                 </Route>
                    <Route path='/event/:id'        > <Home content={<EventDisplay />} />                               </Route>
                    <Route path='/stats'            > <Home content={ <StatsDisplay/> } />                              </Route>
                    <Route path='/friends/search'   > <Home content={ <SearchScreen/> } />                              </Route>
                    <Route path='/friends'          > <Home content={ <MyFriends/> } />                                 </Route>
                    <Route path='/actions'          > <Home content={ <MyActions/> }/>                                  </Route>
                    <Route path='/profile/:id'      > <Home content={ <RandomProfile /> }/>                             </Route>
                    <Route path='/addevent'         > <AddEventScreen/>                                                 </Route>
                    <Route path='/logout'           > <Logout />                                                        </Route>
                    <Route path="/register"         > <RegisterScreen />                                                </Route>
                    <Route path="/login"            > <LoginScreen />                                                   </Route>
                    <Route path="/profile"          > <Home content = { <UserProfile /> } />                            </Route>
                    <Route path="/map"              > <Home content = { <MapDisplay /> }/>                              </Route>
                    <Route path="/"                 > {isLogged() ? <Home content={<Feed />} /> : <LoginScreen /> }     </Route>
                </Switch>
            </Router>
        );
    }

}

export default App;
