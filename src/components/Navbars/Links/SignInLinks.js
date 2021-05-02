import React from 'react';
import { Link } from 'react-router-dom';

const SignInLinks = () => {
	return (
		<div>
			<ul className="flex flex-col lg:flex-row list-none mr-auto">
				<li className="flex items-center">
					<Link
						to="/auth/login"
						className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
					>
						<i className="text-gray-500 far fa-id-badge text-lg leading-lg mr-2" />{' '}
						Login
					</Link>
				</li>
				<li className="flex items-center">
					<Link
						to="/auth/register"
						className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
					>
						<i className="text-gray-500 fas fa-address-card text-lg leading-lg mr-2" />{' '}
						Register
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SignInLinks;
