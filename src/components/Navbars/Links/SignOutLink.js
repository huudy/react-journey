import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/authActions';
const SignOutLink = (props) => {
	return (
		<a
			className={
				'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
			}
			onClick={props.logout}
		>
			Log Out
		</a>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logout()),
	};
};

export default connect(null, mapDispatchToProps)(SignOutLink);
