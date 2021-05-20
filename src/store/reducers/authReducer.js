const initState = {
	authError: null,
};
const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'REGISTER_ERROR':
			return { ...state, authError: 'Register Failed' };
		case 'REGISTER_SUCCESS':
			return { ...state, authError: null };
		case 'LOGIN_ERROR':
			return { ...state, authError: 'Login Failed' };
		case 'LOGIN_SUCCESS':
			return { ...state, authError: null };
		case 'GH_LOGIN_SUCCESS':
			return { ...state, authError: null };
		case 'GH_LOGIN_ERROR':
			return { ...state, authError: 'GitHub login failed!' };
		case 'G_LOGIN_SUCCESS':
			return { ...state, authError: null };
		case 'G_LOGIN_ERROR':
			return { ...state, authError: 'Google login failed!' };
		default:
			return state;
	}
};

export default authReducer;
