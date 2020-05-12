import React from "react";
import '../../stylesheets/login.css';
import axios from "axios";
import { getUser, setUser } from "../util/app_cookies";

class AddEventScreen extends React.Component {

    state={
        latitude: '',
        longitude: '',
        date: '',
        title: '',
        description: '',
        city : '',
        country : ''
    };

    getURLParameter = (name) => {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    };

    submit = (event) => {
        event.preventDefault();
        const tmp = {
            creator: getUser()._id,
            location: {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            },
            date: this.state.date,
            title: this.state.title,
            description: this.state.description,


            country: this.state.country,
            city: this.state.city,
            dateAdded: new Date(),
            comments: [],
            likes: 0,
            dislikes: 0
        };

        axios({
            url: '/event/addOne',
            method: 'POST',
            data: {user: getUser(), event: tmp}
        })
            .then((response) => {
                setUser(response.data.data);
                window.location.href = '/profile/map';
                this.resetUserInputs();
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
            description: '',
            city: '',
            country: ''
        });
    };

    render() {
        const lat = this.getURLParameter('lat');
        const lng = this.getURLParameter('lng');
        const ctry = this.getURLParameter('country');
        return(
            <form className="form-login text-center" onSubmit={this.submit}>
                <input className="form-control inputreg" type="digit" placeholder="51" value={(lat) ? lat : ''} name="latitude" onChange={this.handleChange} required/>
                <input className="form-control inputreg" type="digit" placeholder="51" value={(lng) ? lng : ''} name="longitude" onChange={this.handleChange} required/>
                <input className="form-control inputreg" type="date"  name="date" onChange={this.handleChange} required/>
                <input className="form-control inputreg" type="text" placeholder="je ramasse des chèvres" name="title" onChange={this.handleChange} required/>
                <textarea className="form-control inputreg" name="description" placeholder="Description" onChange={this.handleChange} required></textarea>
                {/*<input className="form-control inputreg" type="textarea" placeholder="votre description" name="description" onChange={this.handleChange} required/>*/}
                <input className="form-control inputreg" type="text" placeholder="city" name="city" onChange={this.handleChange} required/>
                <input className="form-control inputreg" type="text" placeholder="country" value={(ctry && ctry !== 'undefined') ? ctry : ''} name="country" onChange={this.handleChange} required/>

                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    AddEvent
                </button>
            </form>
        );
    }
};

export default AddEventScreen;