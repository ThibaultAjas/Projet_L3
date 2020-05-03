import React from "react";
import RegisterForm from "./RegisterForm";
import '../../stylesheets/login.css';


const RegisterScreen = () => {
    return(
        <div id="login-screen" className="d-flex justify-content-center w-100 h-100 align-items-center ">
            <RegisterForm/>
        </div>
    );
};


export default RegisterScreen;