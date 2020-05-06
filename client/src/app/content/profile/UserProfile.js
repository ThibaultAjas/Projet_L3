import React from "react";

import { getUser } from "../util/app_cookies";
import '../../stylesheets/userProfile.css';


class UserProfile extends React.Component {
	USER = getUser();

	state = {
		firstName: '',
		lastName: '',
		mail: '',
		address: '',
		newPassword: '',
		confirmPassword: '',
		phone: '',
		userName: ''
	};

	componentDidMount() {
		this.setState({
			firstName: this.USER.firstName,
			lastName: this.USER.lastName,
			mail: this.USER.mail,
			address: this.USER.address,
			phone: this.USER.phone,
			userName: this.USER.userName,
			newPassword: '',
			confirmPassword: '',
		});

		console.log(this.USER);
	}

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='m-auto w-75 card text-center p-5'>

				<h1 className='text-center font-weight-bold'> Mon profile </h1>

				<div id='user-profile-form' className='form-group mt-5 align-items-start d-flex flex-column align-items-center'>
					<label>
						<span><p> Firstname: </p></span>
						<input type='text' className='form-control' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
					</label>

					<label>
						<span><p> Lastname: </p></span>
						<input type='text' className='form-control' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
					</label>

					<label>
						<span><p> UserName: </p></span>
						<input type='text' className='form-control' name='userName' value={this.state.userName} onChange={this.handleChange}/>
					</label>

					<label>
						<span><p> Address: </p></span>
						<input type='text' className='form-control' name='address' value={this.state.address} onChange={this.handleChange}/>
					</label>

					<label>
						<span><p> Mail: </p></span>
						<input type='email' className='form-control' name='mail' value={this.state.mail} onChange={this.handleChange}/>
					</label>

					<label>
						<span><p> Phone number </p></span>
						<input type='tel' className='form-control' name='phone' value={this.state.phone} onChange={this.handleChange}
								pattern="[0-9]{10}"/>
					</label>

					<label>
						<span><p> New Password: </p></span>
						<input type='password' className='form-control' name='newPassword' value={this.state.newPassword} onChange={this.handleChange}/>
					</label>

					<label>
						<span><p> Confirm Password: </p></span>
						<input type='password' className='form-control' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange}/>
					</label>

					<input type='submit' className='btn btn-dark mt-5'/>
				</div>
			</div>
		)
	}
}

export default UserProfile;