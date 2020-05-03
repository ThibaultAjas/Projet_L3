import React from "react";

const LoginForm = ()=> {
    return(
        <form className="form-login text-center">

            <h1 className="h3 mb-3 font-weight-normal "> Please sign in</h1>

            <input type="email" className="form-control inputreg" placeholder="Email address" name="email" required autoFocus />
            <input type="password" className="form-control mb-1 inputreg" placeholder="Password" name="password" required autoFocus/>

            <div className="checkbox mb-3">
                <input type="checkbox" value="remember-me"/>
                    Remember me
            </div>
           <button className="btn btn-lg btn-primary btn-block" type="submit">
               Sign in
           </button>
            <a href="/register" >Don't have an account? Create one</a>
        </form>

    );
};

 export default LoginForm;