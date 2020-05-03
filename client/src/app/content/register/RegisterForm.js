import React from "react";

const RegisterForm = () => {
    return(


        <form className="form-login text-center">

            <h1 className="h3 mb-3 font-weight-normal "> Please sign in</h1>

            <input type="email" className="form-control inputreg" placeholder="Email address" name="email" required autoFocus />
            <input type="password" className="form-control inputreg" placeholder="Password" name="password" required autoFocus />
            <input type="password" className="form-control inputreg" placeholder="confirm password" name="password_conf" required />
            <input type="text" className="form-control inputreg" placeholder="first name" name="prenom" required  />
            <input type="text" className="form-control inputreg" placeholder="last name" name="nom_de_famille" required  />
            <input type="text" className="form-control inputreg" placeholder="username" name="username" />
            <input type="digit" className="form-control inputreg" placeholder="0675488456" name="numero-de_telephone" required  />
            <input type="text" className="form-control inputreg" placeholder="addresse" name="addresse" required />

            <div className="checkbox mb-3">
                <input type="checkbox" value="remember-me"/>
                Remember me
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
                Register
            </button>


        </form>
    );
};

export default RegisterForm;