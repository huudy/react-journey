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
		default:
			return state;
	}
};

export default authReducer;
