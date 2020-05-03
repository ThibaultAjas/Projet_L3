import React from 'react';

const Login = ()=> {
    return(
        <form>
            <label>
                email:
                <input type="texte" name="email" />
            </label>
            <input type="submit" value="Envoyer"/>
        </form>
    );
};

 export default Login;