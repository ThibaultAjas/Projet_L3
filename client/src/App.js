import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./app/Home";
import MapDisplay from "./app/content/map/MapDisplay";

class App extends React.Component {

    state = {
        mail: '',
        username: ''
    };

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

    render() {

        console.log('State: ', this.state);
        // JSX
        return(
            // <div>
            //     <h2> Welcome to my App</h2>
            // <form onSubmit={this.submit}>
            //     <div className="form-input">
            //         <input
            //             type="text"
            //             name="mail"
            //             value={this.state.mail}
            //             placeholder="Enter your mail"
            //             onChange={this.handleChange}
            //         />
            //     </div>
            //     <div className="form-input">
            //         <textarea
            //             name="username"
            //             cols="30"
            //             rows="10"
            //             value={this.state.username}
            //             placeholder="Enter your name"
            //             onChange={this.handleChange}
            //         >
            //
            //         </textarea>
            //     </div>
            //
            //
            //     <button>Submit</button>
            // </form>
            // </div>

            <Router>
                <Switch>
                    <Route path="/map"> <MapDisplay/> </Route>
                    <Route path="/"> <Home/> </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
