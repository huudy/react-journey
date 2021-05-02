// require('firebase/auth')

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
	register,
	googleSignIn,
	githubSignIn,
} from '../../store/actions/authActions';

class Register extends Component {
	state = {
		email: '',
		password: '',
	};
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('start to register');
		console.log(this.props);
		this.props.register(this.state);
	};

	render() {
		const { authError, auth } = this.props;
		if (auth.uid) return <Redirect to="/admin/dashboard" />;

		return (
			<>
				<div className="container mx-auto px-4 h-full">
					<div className="flex content-center items-center justify-center h-full">
						<div className="w-full lg:w-6/12 px-4">
							<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
								<div className="rounded-t mb-0 px-6 py-6">
									<div className="text-center mb-3">
										<h6 className="text-gray-600 text-sm font-bold">
											Sign up with
										</h6>
									</div>
									<div className="btn-wrapper text-center">
										<button
											className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
											type="button"
											onClick={this.props.githubSignIn}
										>
											<img
												alt="..."
												className="w-5 mr-1"
												src={require('assets/img/github.svg')}
											/>
											Github
										</button>
										<button
											className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
											type="button"
											onClick={this.props.googleSignIn}
										>
											<img
												alt="..."
												className="w-5 mr-1"
												src={require('assets/img/google.svg')}
											/>
											Google
										</button>
									</div>
									<hr className="mt-6 border-b-1 border-gray-400" />
								</div>
								<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
									<div className="text-gray-500 text-center mb-3 font-bold">
										<small>Or sign up with credentials</small>
									</div>
									<form onSubmit={this.handleSubmit}>
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-gray-700 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Email
											</label>
											<input
												type="email"
												id="email"
												className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
												placeholder="Email"
												onChange={this.handleChange}
											/>
										</div>

										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-gray-700 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Password
											</label>
											<input
												type="password"
												id="password"
												className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
												placeholder="Password"
												onChange={this.handleChange}
											/>
										</div>

										<div>
											<label className="inline-flex items-center cursor-pointer">
												<input
													id="customCheckLogin"
													type="checkbox"
													className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
												/>
												<span className="ml-2 text-sm font-semibold text-gray-700">
													I agree with the{' '}
													<a
														href="#pablo"
														className="text-blue-500"
														onClick={(e) => e.preventDefault()}
													>
														Privacy Policy
													</a>
												</span>
											</label>
										</div>

										<div className="text-center mt-6">
											<button
												className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
												type="submit"
											>
												Create Account
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		register: (creds) => dispatch(register(creds)),
		githubSignIn: () => dispatch(githubSignIn()),
		googleSignIn: () => dispatch(googleSignIn()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
