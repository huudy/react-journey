import React from 'react';

// components

import CardSettings from 'components/Cards/CardSettings.js';
import CardProfile from 'components/Cards/CardProfile.js';
import { connect } from 'react-redux';

const Settings = (props) => {
	const { profile } = props;
	return (
		<>
			<div className="flex flex-wrap">
				<div className="w-full lg:w-8/12 px-4">
					<CardSettings profile={profile} />
				</div>
				<div className="w-full lg:w-4/12 px-4">
					<CardProfile profile={profile} />
				</div>
			</div>
		</>
	);
};
const mapStateToProps = (state) => {
	return {
		profile: state.firebase.profile,
	};
};
export default connect(mapStateToProps)(Settings);
