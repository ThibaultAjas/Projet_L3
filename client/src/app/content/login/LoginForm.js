import React from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies("appCookies");
let doRemember = false;

class LoginForm extends React.Component {

    state = {
        mail: '',
        password: ''
    };

    componentDidMount() {
        if (cookies.get('mail')) {
            this.setState({
                mail: cookies.get('mail'),
                password: cookies.get('password')
            });
        }
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    };

    submit = (event) => {
        event.preventDefault();
        const payload = {mail: this.state.mail, password: this.state.password};

        axios({
            url: '/user/login',
            method: 'POST',
            data: payload
        })
            .then((response) => {
                const pl = response.data[0];

                if (doRemember) {
                    cookies.set('mail', this.state.mail);
                    cookies.set('password', this.state.password);
                }

                cookies.set("isLogged", true);
                window.location.href = '/';
                this.resetUserInputs();
            })
            .catch(() => {
                console.log('Internal server error');
                this.resetUserInputs();
            });
    };

    resetUserInputs = () => {
        this.setState({
            mail: '',
            password: ''
        });
    };

    rememberMe = () => {
        doRemember = true;
    };


    render() {
        return (
            <form className="form-login text-center" onSubmit={this.submit}>

                <h1 className="h3 mb-3 font-weight-normal "> Please sign in</h1>

                <input type="email" className="form-control inputreg" placeholder="Email address" name="mail" required
                       autoFocus value = { this.state.mail } onChange = { this.handleChange } />

                <input type="password" className="form-control mb-1 inputreg" placeholder="Password" name="password"
                       required value = { this.state.password } onChange = { this.handleChange }/>

                <div className="checkbox mb-3">
                    <input type="checkbox" value="remember-me" onClick={ this.rememberMe }/>
                    Remember me
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Sign in
                </button>
                <a href="/register">Don't have an account? Create one</a>
            </form>
        );
    }
};

export default LoginForm;