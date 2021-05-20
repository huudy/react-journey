import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore'; // <- needed if using firestore
import 'firebase/auth';
const config = {
	apiKey: process.env.REACT_APP_DEV_API_KEY,
	authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
	projectId: process.env.REACT_APP_DEV_PROJECT_ID,
	storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_DEV_APP_ID,
	measurementId: process.env.REACT_APP_DEV_MEASUREMENT_ID,
};

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
	// enableClaims: true // Get custom claims along with the profile
};

// ++HELPERS
const getProviderById = (id) => {
	switch (id) {
		case 'google.com':
			return new firebase.auth.GoogleAuthProvider();
		case 'github.com':
			return new firebase.auth.GithubAuthProvider();
		default:
			return '';
	}
};

const EXISTING_ACCOUNT = 'auth/account-exists-with-different-credential';
const handleLinkingAccounts = (accountName) => {};

firebase.initializeApp(config);
firebase.firestore();

export { firebase, rrfConfig, getProviderById, EXISTING_ACCOUNT };
