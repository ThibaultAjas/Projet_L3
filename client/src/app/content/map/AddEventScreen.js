import React from "react";
import '../../stylesheets/login.css';
import axios from "axios";

class AddEventScreen extends React.Component {

    state={
        latitude: '',
        longitude: '',
        date: '',
        title: '',
        description: ''
    };


    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
        console.log("mon obj",this.state);

    };

    submit = (event) => {

        const tmp = {
            location: {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            },
            date: this.state.date,
            title: this.state.title,
            description: this.state.description,
            
        };

        console.log("mon event",tmp);

        axios({
            url: '/event/addOne',
            method: 'POST',
            data: tmp
        })
            .then((response) => {
                window.location.href = '/map';
                // this.resetUserInputs();
            })
            .catch((err) => {
                console.log('Internal server error: ', err);
                // TODO: Afficher une popup, une div ... Pour signaler une erreur à l'utilisateur
            });
    };

    resetUserInputs = () => {
        this.setState({
            latitude: '',
            longitude: '',
            date: '',
            title: '',
            description: ''
        });
    };

    render() {
        return(
            <form className="form-login text-center" onSubmit={this.submit}>
                <input className="form-control inputreg" type="digit" placeholder="51" name="latitude" onChange={this.handleChange} required/>
                <input className="form-control inputreg" type="digit" placeholder="51" name="longitude" onChange={this.handleChange} required/>
                <input className="form-control inputreg" type="text" placeholder="06/05/2020" name="date" onChange={this.handleChange} required/>
                <input className="form-control inputreg" type="text" placeholder="je ramasse des chèvres" name="title" onChange={this.handleChange} required/>
                <input className="form-control inputreg" type="text" placeholder="votre description" name="description" onChange={this.handleChange} required/>

                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    AddEvent
                </button>
            </form>
        );
    }
};

export default AddEventScreen;