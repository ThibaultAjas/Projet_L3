import React from "react";

import { getUser, setUser } from "../../util/app_cookies";
import '../../../stylesheets/userProfile.css';
import axios from "axios";


class UserProfile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

			firstName: '',
			lastName: '',
			mail: '',
			address: '',
			country:'',
			city:'',
			newPassword: '',
			confirmPassword: '',
			phone: '',
			userName: ''
		};
		this.submit=this.submit.bind(this);
	}

	componentDidMount() {

		this.setState({
			firstName: getUser().firstName,
			lastName: getUser().lastName,
			mail: getUser().mail,
			address: getUser().address,
			country:getUser().country,
			city:getUser().city,
			phone: (getUser().phone)?getUser().phone:"0123456789",
			userName: getUser().userName,
			newPassword: '',
			confirmPassword: '',
		});
	};

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	submit(event){
		event.preventDefault();
		console.log(this.state);
		let newUser = {
			isAdmin: (getUser().isAdmin)?getUser().isAdmin:false,
			mail: this.state.mail,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			userName: this.state.userName,
			password: this.state.confirmPassword,
			address: this.state.address,
			city: this.state.city,
			country: this.state.country,
			phone: this.state.phone,
			config: getUser().config,
			following: getUser().following,
			events: getUser().events
		};
		axios({
			url: '/user/updateById',
			method: 'POST',
			data: {_id: getUser()._id, user : newUser}
		})
			.then((response) => {
				setUser(response.data.data);
				window.location.href = '/profile';
			})
			.catch((err) => {
				console.log('Internal server error: ', err);
			});
		axios({
			url: '/user/updateById',
			method: 'POST',
			data: {_id: getUser()._id, user : newUser}
		})
			.then((response) => {
				setUser(response.data.data);
				window.location.href = '/profile';
			})
			.catch((err) => {
				console.log('Internal server error: ', err);
			});

	};

	render() {
		return (
				<form className="form-login text-center bg-light mx-auto mt-5" style={{borderRadius: '10px', minWidth: '50%'}} onSubmit={this.submit}>
					<h1 className='text-center font-weight-bold px-5'> Mon profil </h1>

					<div id='user-profile-form' className='form-group mt-5 align-items-start d-flex flex-column align-items-center'>
						<label>
							<span><p> Prénom: </p></span>
							<input type='text' className='form-control' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
						</label>

						<label>
							<span><p> Nom: </p></span>
							<input type='text' className='form-control' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
						</label>

						<label>
							<span><p> Nom d'utilisateur: </p></span>
							<input type='text' className='form-control' name='userName' value={this.state.userName} onChange={this.handleChange}/>
						</label>

						<label>
							<span><p> Adresse: </p></span>
							<input type='text' className='form-control' name='address' value={this.state.address} onChange={this.handleChange}/>
						</label>

						<label>
							<span><p> Pays: </p></span>
							<input type='text' className='form-control' name='country' value={this.state.country} onChange={this.handleChange}/>
						</label>

						<label>
							<span><p> Ville: </p></span>
							<input type='text' className='form-control' name='city' value={this.state.city} onChange={this.handleChange}/>
						</label>

						<label>
							<span><p> Adresse mail: </p></span>
							<input type='email' className='form-control' name='mail' value={this.state.mail} onChange={this.handleChange}/>
						</label>

						<label>
							<span><p> Numéro de telephone: </p></span>
							<input type='tel' className='form-control' name='phone' value={this.state.phone} onChange={this.handleChange}
									pattern="[0-9]{10}"/>
						</label>

						<label>
							<span><p> Nouveau mot de passe: </p></span>
							<input type='password' className='form-control' name='newPassword' value={this.state.newPassword} onChange={this.handleChange}/>
						</label>

						<label>
							<span><p> Confirmer le mot de passe: </p></span>
							<input type='password' className='form-control' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange}/>
						</label>

						<button className="btn btn-lg btn-primary btn-block" type="submit">
							Sauvegarder
						</button>
					</div>

				</form>
		)
	}
}

export default UserProfile;