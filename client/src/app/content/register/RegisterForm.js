import React from "react";
import axios from "axios";

class RegisterForm extends React.Component {

    state = {
        mail: '',
        password: '',
        firstName: '',
        lastName: '',
        userName: '',
        tel: '',
        address: ''
    };

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    };

    submit = (event) => {
        event.preventDefault();
        const payload = {
            mail: this.state.mail,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            tel: this.state.tel,
            address: this.state.address
        };

        console.log(payload)

        axios({
            url: '/user/register',
            method: 'POST',
            data: payload
        })
            .then((response) => {
                const pl = response.data[0];

                console.log(pl);
                window.location.href = '/login';
                this.resetUserInputs();
            })
            .catch((err) => {
                console.log('Internal server error: ', err);
                // TODO: Afficher une popup, une div ... Pour signaler une erreur à l'utilisateur
            });
    };

    resetUserInputs = () => {
        this.setState({
            mail: '',
            password: '',
            firstName: '',
            lastName: '',
            userName: '',
            tel: '',
            address: ''
        });
    };

    render() {
        return (
            <form className="form-login text-center" onSubmit={this.submit}>

                <h1 className="h3 mb-3 font-weight-normal "> Please sign in</h1>

                <input type="email" className="form-control inputreg" placeholder="Email address" name="mail" required onChange = { this.handleChange }
                       autoFocus/>
                <input type="password" className="form-control inputreg" placeholder="Password" name="password" required onChange = { this.handleChange }
                       autoFocus/>
                <input type="password" className="form-control inputreg" placeholder="confirm password"
                       name="password_conf" onChange = { this.handleChange }  required/>
                <input type="text" className="form-control inputreg" placeholder="first name" name="firstName" onChange = { this.handleChange }  required/>
                <input type="text" className="form-control inputreg" placeholder="last name" name="lastName" onChange = { this.handleChange }
                       required/>
                <input type="text" className="form-control inputreg" placeholder="username" name="userName" onChange = { this.handleChange } />
                <input type="tel" className="form-control inputreg" placeholder="0675488456"
                       name="tel" onChange = { this.handleChange }  required/>
                <input type="text" className="form-control inputreg" placeholder="addresse" name="address" onChange = { this.handleChange }  required/>

                <div className="checkbox mb-3">
                    <input type="checkbox" value="remember-me"/>
                    Remember me
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Register
                </button>

                <a href="/login">or login</a>

            </form>
        );
    }
};

export default RegisterForm;