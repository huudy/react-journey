import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

// components
import { Redirect } from 'react-router-dom';
import CardLineChart from 'components/Cards/CardLineChart.js';
import CardBarChart from 'components/Cards/CardBarChart.js';
import CardPageVisits from 'components/Cards/CardPageVisits.js';
import CardSocialTraffic from 'components/Cards/CardSocialTraffic.js';

class Dashboard extends Component {
	render() {
		const { projects, auth } = this.props;
		if (!auth.uid) return <Redirect to="/auth/login" />;
		return (
			<>
				<div className="flex flex-wrap">
					<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
						{/* <CardLineChart /> */}
					</div>
					<div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
				</div>
				<div className="flex flex-wrap mt-4">
					<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
						<CardPageVisits projects={projects} />
					</div>
					<div className="w-full xl:w-4/12 px-4">
						<CardSocialTraffic />
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		projects: state.firestore.ordered.projects,
		prices: state.firestore.ordered.prices,
		auth: state.firebase.auth,
	};
};
export default compose(
	firestoreConnect(() => ['projects', 'prices']),
	connect(mapStateToProps)
)(Dashboard);
