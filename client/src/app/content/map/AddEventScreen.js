import React from "react";
import '../../stylesheets/login.css';

const AddEventScreen = () => {

    return(

    <form className="form-login text-center" >


        <input className="form-control inputreg" type="digit" placeholder="51" name="lat"/>

        <input className="form-control inputreg" type="digit" placeholder="51" name="long"/>

        <input className="form-control inputreg" type="text" placeholder="votre description" name="lat"/>

        <button className="btn btn-lg btn-primary btn-block" type="submit">
            AddEvent
        </button>


    </form>
    );
};


export default AddEventScreen;