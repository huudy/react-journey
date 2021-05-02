import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/styles/tailwind.css';
// layouts
import Admin from 'layouts/Admin.js';
import Auth from 'layouts/Auth.js';
// views without layouts
import Landing from 'views/Landing.js';
import Profile from 'views/Profile.js';
import Index from 'views/Index.js';
// REDUX&FIREBASE
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../src/store/reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import {
	ReactReduxFirebaseProvider,
	getFirebase,
	isLoaded,
} from 'react-redux-firebase';
import { firebase, rrfConfig } from './firebase';

const initialState = {};
const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
	// useFirestoreForProfile: true,
	// userProfile: 'users',
};

function AuthIsLoaded({ children }) {
	const auth = useSelector((state) => state.firebase.auth);
	if (!isLoaded(auth)) return <div>splash screen...</div>;
	return children;
}

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<BrowserRouter>
				<AuthIsLoaded>
					<Switch>
						{/* add routes with layouts */}
						<Route path="/admin" component={Admin} />
						<Route path="/auth" component={Auth} />
						{/* add routes without layouts */}
						<Route path="/landing" exact component={Landing} />
						<Route path="/profile" exact component={Profile} />
						<Route path="/" exact component={Index} />
						{/* add redirect for first page */}
						<Redirect from="*" to="/admin/dashboard" />
					</Switch>
				</AuthIsLoaded>
			</BrowserRouter>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
);
