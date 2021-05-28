/*eslint-disable*/
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import Footer from 'components/Footers/Footer.js';
import { connect } from 'react-redux';
import { useGravityGroup } from 'renature';

class Index extends Component {
	render() {
		// const [nodes] = useGravityGroup(3, (i) => ({
		// 	from: {
		// 		transform: 'translate(0px, 0px) scale(1) skewY(0deg)',
		// 		opacity: 0,
		// 	},
		// 	to: {
		// 		transform: 'translate(20px, 20px) scale(1.2) skewY(5deg)',
		// 		opacity: 1,
		// 	},
		// 	config: {
		// 		moverMass: 10000,
		// 		attractorMass: 10000000000000,
		// 		r: 10,
		// 	},
		// 	repeat: Infinity,
		// 	delay: i * 500,
		// }));
		const { auth } = this.props;
		if (auth.uid) return <Redirect to="/admin/dashboard" />;
		return (
			<>
				{/* <IndexNavbar transparent /> */}
				<section className="header relative pt-16 items-center flex h-screen max-h-860-px">
					<div className="container mx-auto items-center flex flex-wrap">
						<div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
							<div className="pt-32 sm:pt-0">
								<h2 className="font-semibold text-4xl text-gray-700">
									ReactJourney
								</h2>
								<p className="mt-4 text-lg leading-relaxed text-gray-600">
									As I am starting my React journey I decided to use this Free
									and Open Source project in order to recompensate my poor CSS
									skils ;) Here comes Creative Tim and its React Notus with a
									support of
									<a
										href="https://tailwindcss.com/?ref=creativetim"
										className="text-gray-700"
										target="_blank"
									>
										Tailwind CSS
									</a>
								</p>
								<div className="mt-12">
									<Link
										to="/auth/register"
										className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
									>
										Get started
									</Link>
									<Link
										to="/admin/dashboard"
										className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
									>
										Dashboard
									</Link>
								</div>
							</div>
						</div>
					</div>

					<img
						className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
						src={require('assets/svg/react.svg')}
						alt="..."
					/>
				</section>

				<section className="block relative z-1 bg-gray-700">
					<div className="container mx-auto">
						<div className="justify-center flex flex-wrap">
							<div className="w-full lg:w-12/12 px-4  -mt-24">
								<div className="flex flex-wrap">
									<div className="w-full lg:w-4/12 px-4">
										<h5 className="text-xl font-semibold pb-4 text-center">
											Login Page
										</h5>
										<Link to="/auth/login">
											<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
												<img
													alt="..."
													className="align-middle border-none max-w-full h-auto rounded-lg"
													src={require('assets/img/login.jpg')}
												/>
											</div>
										</Link>
									</div>

									<div className="w-full lg:w-4/12 px-4">
										<h5 className="text-xl font-semibold pb-4 text-center">
											Profile Page
										</h5>
										<Link to="/profile">
											<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
												<img
													alt="..."
													className="align-middle border-none max-w-full h-auto rounded-lg"
													src={require('assets/img/profile.jpg')}
												/>
											</div>
										</Link>
									</div>

									<div className="w-full lg:w-4/12 px-4">
										<h5 className="text-xl font-semibold pb-4 text-center">
											Landing Page
										</h5>
										<Link to="/landing">
											<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
												<img
													alt="..."
													className="align-middle border-none max-w-full h-auto rounded-lg"
													src={require('assets/img/landing.jpg')}
												/>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-20 bg-gray-700 overflow-hidden">
					<div className="container mx-auto pb-64">
						<div className="flex flex-wrap justify-center">
							<div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
								<div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
									<i className="fas fa-code-branch text-xl"></i>
								</div>
								<h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
									My Projects
								</h3>
								<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500">
									Since{' '}
									<a
										href="https://tailwindcss.com/?ref=creativetim"
										className="text-gray-400"
										target="_blank"
									>
										Tailwind CSS
									</a>{' '}
									is an open source project we wanted to continue this movement
									too. You can give this version a try to feel the design and
									also test the quality of the code!
								</p>
								<p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-500">
									Get it free on Github and please help us spread the news with
									a Star!
								</p>
								<a
									href="https://github.com/huudy"
									target="_blank"
									className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
								>
									My Github
								</a>
							</div>

							<div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
								<i className="fab fa-github text-gray-800 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
							</div>
						</div>
					</div>
				</section>

				<section className="pb-16 bg-gray-300 relative pt-32">
					<div
						className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
						style={{ transform: 'translateZ(0)' }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-gray-300 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>

					<div className="container mx-auto">
						<div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
							<div className="w-full text-center lg:w-8/12">
								<p className="text-4xl text-center">
									<span role="img" aria-label="love">
										😍
									</span>
								</p>
								<h3 className="font-semibold text-3xl">
									Do you love this Starter Kit?
								</h3>
								<p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
									Cause if you do, it can be yours now. Hit the buttons below to
									navigate to get the Free version for your next project. Build
									a new web app or give an old project a new look!
								</p>
								<div className="sm:block flex flex-col mt-10">
									<a
										href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
										target="_blank"
										className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
									>
										Get started
									</a>
									<a
										href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
										target="_blank"
										className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
									>
										<i className="fab fa-github text-lg mr-1"></i>
										<span>Help With a Star</span>
									</a>
								</div>
								<div className="text-center mt-16"></div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
	};
};
export default connect(mapStateToProps)(Index);
