import React from "react";
import axios from "axios";

class RegisterForm extends React.Component {

    state = {
        mail: '',
        password: '',
        password_conf:'',
        firstName: '',
        lastName: '',
        userName: '',
        tel: '',
        address: '',
        country: '',
        city:'',
    };

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});

    };


    formConform = () => {
        let tmp = true;

        if (this.state.password !== this.state.password_conf){
            return(false);
        };
        if(this.state.firstName.length>15 | this.state.lastName.length>15 | this.state.userName.length>20){
            return(false);
        };
        if(this.state.tel.length!==10){
            return(false);
        };
        if(this.state.address.length>50){
            return(false);
        }else {
            return (tmp);
        };
    };

    submit = (event) => {
        event.preventDefault();

        if (this.formConform()) {
            const payload = {
                mail: this.state.mail,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                tel: this.state.tel,
                address: this.state.address,
                country: this.state.country,
                city: this.state.city
            };


            axios({
                url: '/user/register',
                method: 'POST',
                data: payload
            })
                .then((response) => {
                    window.location.href = '/login';
                    this.resetUserInputs();
                })
                .catch((err) => {
                    console.log('Internal server error: ', err);
                });
        }else{
            if (this.state.password !== this.state.password_conf) {
                document.getElementById("password").value = "";
                document.getElementById("confPassword").value = "";
                document.getElementById("password").style.backgroundColor = "#db8491";
                document.getElementById("confPassword").style.backgroundColor = "#db8491";
            }else{
                document.getElementById("password").style.backgroundColor = "white";
                document.getElementById("confPassword").style.backgroundColor = "white";
            };
            if (this.state.firstName.length>15){
              document.getElementById("firstName").value = "";
              document.getElementById("firstName").style.background = "#db8491";
            }else{
                document.getElementById("firstName").style.background = "white";
            }
            if( this.state.lastName.length>15 ){
                document.getElementById("lastName").value = "";
                document.getElementById("lastName").style.background = "#db8491";
            }else{
                document.getElementById("lastName").style.background = "white";
            }
            if(this.state.userName.length>20){
                document.getElementById("userName").value = "";
                document.getElementById("userName").style.background = "#db8491";
            }else{
                document.getElementById("userName").style.background = "white";
            }
            if(this.state.tel.length!==10){
                document.getElementById("tel").value = "";
                document.getElementById("tel").style.background = "#db8491";
            }else{
                document.getElementById("tel").style.background = "white";
            }
            if(this.state.address.length>50){
                document.getElementById("address").value = "";
                document.getElementById("address").style.background = "#db8491";
            }else{
                document.getElementById("address").style.background = "white";
            }


        };
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

                <input type="email" className="form-control inputreg"    placeholder="Email address"    name="mail"          id="mail"              onChange = { this.handleChange }  required autoFocus/>
                <input type="password" className="form-control inputreg" placeholder="Password"         name="password"      id="password"          onChange = { this.handleChange }  required/>
                <input type="password" className="form-control inputreg" placeholder="confirm password" name="password_conf" id="confPassword"     onChange = { this.handleChange }  required/>
                <input type="text" className="form-control inputreg"     placeholder="first name"       name="firstName"     id="firstName"         onChange = { this.handleChange }  required/>
                <input type="text" className="form-control inputreg"     placeholder="last name"        name="lastName"      id="lastName"          onChange = { this.handleChange }  required/>
                <input type="text" className="form-control inputreg"     placeholder="username"         name="userName"      id="userName"          onChange = { this.handleChange }  required/>
                <input type="tel" className="form-control inputreg"      placeholder="0675488456"       name="tel"           id="tel"               onChange = { this.handleChange }  required/>
                <input type="text" className="form-control inputreg"     placeholder="addresse"         name="address"       id="address"           onChange = { this.handleChange }  required/>
                <input type="text" className="form-control inputreg"     placeholder="code postal"      name="code_postal"   id="code_postal"       onChange = { this.handleChange }  required/>
                <input type="text" className="form-control inputreg"     placeholder="ville"            name="city"          id="city"              onChange = { this.handleChange }  required/>
                <input type="text" className="form-control inputreg"     placeholder="country"          name="country"       id="country"           onChange = { this.handleChange }  required/>

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