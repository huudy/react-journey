export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		getFirebase.call();
		const fs = getFirestore();

		fs.collection('projects')
			.add({ ...project })
			.then(() => {
				dispatch({ type: 'CREATE', project });
			})
			.catch((err) => {
				dispatch({ type: 'CREATE_ERROR', err });
			});
	};
};
