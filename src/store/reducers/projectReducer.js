const initState = {
	projects: [
		{ id: 1, title: 'dsda', content: 'blabbla' },
		{ id: 2, title: 'bab', content: 'blabbla' },
		{ id: 3, title: 'dsda', content: 'blabbla' },
		{ id: 4, title: 'dsda', content: 'blabbla' },
	],
};
const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE':
			console.log('created', action.project);
			return state;

		case 'CREATE_ERROR':
			console.log('created ERORR', action.project);
			return state;

		default:
			return state;
	}
};

export default projectReducer;
