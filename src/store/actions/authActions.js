export const register = (newUser) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		console.log('newUser');
		console.log(newUser);
		firebase
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then((resp) => {
				console.log('created trying to insert into firestore');
				console.log(resp);
				return firestore.collection('users').doc(resp.user.uid).set({
					email: newUser.email,
				});
			})
			.then(() => {
				console.log('okkk');
				dispatch({ type: 'REGISTER_SUCCESS' });
			})
			.catch((err) => {
				console.log(err);
				dispatch({ type: 'REGISTER_ERROR', err });
			});
	};
};

export const login = (credentials) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				console.log('login ok');
				dispatch({ type: 'LOGIN_SUCCESS' });
			})
			.catch((err) => {
				console.log('loginError ' + err);
				dispatch({ type: 'LOGIN_ERROR', err });
			});
	};
};
export const logout = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({ type: 'LOGOUT_SUCCESS' });
			});
	};
};
export const googleSignIn = () => {
	return (dispatch, getState, { getFirebase }) => {
		const fs = getFirebase();
		const googleAuthProvider = new fs.auth.GoogleAuthProvider();
		fs.auth()
			.signInWithPopup(googleAuthProvider)
			.then(
				(result) => {
					console.log(result);
					dispatch({ type: 'G_LOGIN_SUCCESS' });
				},
				(err) => {
					console.log(err);
					dispatch({ type: 'G_LOGIN_ERROR' });
				}
			);
	};
};

export const githubSignIn = () => {
	return (dispatch, getState, { getFirebase }) => {
		const fs = getFirebase();
		const githubProvider = new fs.auth.GithubAuthProvider();
		// firebase.auth().signInWithPopup(githubProvider);
		fs.auth()
			.signInWithPopup(githubProvider)
			.then(
				(result) => {
					dispatch({ type: 'GH_LOGIN_SUCCESS' });

					console.log(result);
				},
				(err) => {
					dispatch({ type: 'GH_LOGIN_ERROR' });

					console.log(err);
				}
			);
	};
};
