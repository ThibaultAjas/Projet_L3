import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

import './App.css';


import Home from "./app/Home";
import MapDisplay from "./app/content/map/MapDisplay";
import Profile from "./app/content/profile/Profile";
import Feed from "./app/content/feed/Feed";
import LoginScreen from "./app/content/login/LoginScreen";
import RegisterScreen from "./app/content/register/RegisterScreen";

class App extends React.Component {

    state = {
        mail: '',
        logged: false
    };

    componentDidMount() {
        this.verifyIsLogged();
    }

    /*
    handleChange = ({ target }) => {
        const { name, value } = target;

        this.setState({ [name]: value });
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            mail: this.state.mail,
            firstName: this.state.username
        };

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data has been sent to the server');
                this.resetUserInputs();
            })
            .catch(() => {
                console.log('Internal server error');
            });
    };

    resetUserInputs = () => {
      this.setState({
          mail: '',
          username: ''
      });
    };
    */

    verifyIsLogged = () => {
        const payload = {mail: this.state.mail};
        axios({
            url: '/api/verify',
            method: 'POST',
            data: payload
        })
            .then((response) => {
                const data = response.data;

                this.setState({mail: data.mail, logged: data.logged});
                console.log('State: ', this.state);
                this.forceUpdate();
            })
            .catch((error) => {
                console.log('Internal server error');
            });
    };

    // TODO: Pour l'instant, si on est pas connecté il nous redirige vers le Feed, faire en sorte qu'il nous redirige plutot vers la page de login
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/register"><RegisterScreen/> </Route>
                    <Route path="/login"> <LoginScreen/> </Route>
                    <Route path="/profile"> <Home content={<Profile/>} logged={this.state.logged}/> </Route>
                    <Route path="/map"> <Home content={<MapDisplay logged={this.state.logged}/>}
                                              logged={this.state.logged}/> </Route>
                    <Route path="/"> <Home content={<Feed/>} logged={this.state.logged}/> </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
