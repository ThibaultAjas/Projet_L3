import React from "react";
import LoginForm from "./LoginForm";
import '../../stylesheets/login.css';


class LoginScreen extends React.Component {
    render() {
        return (
            <div id="login-screen" className="d-flex justify-content-center w-100 h-100 align-items-center ">
                <LoginForm/>
            </div>
        );
    }
};

export default LoginScreen;