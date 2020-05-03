import React from "react";


const RegisterForm = () => {
    return(


        <form className="form-login text-center">

            <h1 className="h3 mb-3 font-weight-normal "> Please sign in</h1>

            <input type="email" className="form-control" placeholder="Email address" name="email" required autoFocus />
            <input type="password" className="form-control mb-1" placeholder="Password" name="password" required autoFocus />
            <input type="password" className="form-control mb-1" placeholder="confirm password" name="password_conf" required />
            <input type="text" className="form-control" placeholder="first name" name="prenom" required  />
            <input type="text" className="form-control" placeholder="last name" name="nom_de_famille" required  />
            <input type="text" className="form-control" placeholder="username" name="username" />
            <input type="number" className="form-control" placeholder="0675488456" name="numero-de_telephone" required  />
            <input type="text" className="form-control" placeholder="addresse" name="addresse" required />

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