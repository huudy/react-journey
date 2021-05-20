import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

// components
import { Redirect } from 'react-router-dom';
import CardPageVisits from 'components/Cards/CardPageVisits.js';
import CardSocialTraffic from 'components/Cards/CardSocialTraffic.js';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ws: null,
		};
	}
	componentDidMount() {
		this.connect();
	}

	componentWillUnmount() {
		// this.close();
	}

	timeout = 250;
	connect = () => {
		// const conn = new WebSocket('wss://dex.binance.org/api/ws');

		var ws = new WebSocket(
			// 'wss://streamer.cryptocompare.com/v2?format=streamer'
			'wss://api.bitbay.net/websocket/'
		);
		let that = this; // cache the this
		var connectInterval;

		// websocket onopen event listener
		ws.onopen = () => {
			console.log('connected websocket main component');
			console.log(ws);
			// ws.send(
			// 	JSON.stringify({
			// 		action: 'SubAdd',
			// 		subs: [
			// 			'11~BTC',
			// 			'21~BTC',
			// 			'5~CCCAGG~BTC~USD',
			// 			'11~ETH',
			// 			'21~ETH',
			// 			'5~CCCAGG~ETH~USD',
			// 			'11~BCH',
			// 			'21~BCH',
			// 			'5~CCCAGG~BCH~USD',
			// 			'11~EOS',
			// 			'21~EOS',
			// 			'5~CCCAGG~EOS~USD',
			// 			'11~XRP',
			// 			'21~XRP',
			// 			'5~CCCAGG~XRP~USD',
			// 			'11~LTC',
			// 			'21~LTC',
			// 			'5~CCCAGG~LTC~USD',
			// 			'11~ETC',
			// 			'21~ETC',
			// 			'5~CCCAGG~ETC~USD',
			// 			'11~BSV',
			// 			'21~BSV',
			// 			'5~CCCAGG~BSV~USD',
			// 			'11~LINK',
			// 			'21~LINK',
			// 			'5~CCCAGG~LINK~USD',
			// 			'11~ATOM',
			// 			'21~ATOM',
			// 			'5~CCCAGG~ATOM~USD',
			// 		],
			// 	})
			// );
			this.setState({ ws: ws });

			that.timeout = 250; // reset timer to 250 on open of websocket connection
			clearTimeout(connectInterval); // clear Interval on on open of websocket connection
		};

		// websocket onclose event listener
		ws.onclose = (e) => {
			console.log(
				`Socket is closed. Reconnect will be attempted in ${Math.min(
					10000 / 1000,
					(that.timeout + that.timeout) / 1000
				)} second.`,
				e.reason
			);

			that.timeout = that.timeout + that.timeout; //increment retry interval
			connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
		};

		ws.onmessage = (e) => {
			console.log(e);
		};
		// websocket onerror event listener
		ws.onerror = (err) => {
			console.error(
				'Socket encountered error: ',
				err.message,
				'Closing socket'
			);

			ws.close();
		};
	};

	/**
	 * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
	 */
	check = () => {
		const { ws } = this.state;
		if (!ws || ws.readyState === WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
	};
	render() {
		const { projects, auth } = this.props;
		if (!auth.uid) return <Redirect to="/auth/login" />;
		return (
			<>
				<div className="flex flex-wrap">
					<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
						{/* <CardLineChart /> */}
					</div>
					<div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
				</div>
				<div className="flex flex-wrap mt-4">
					<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
						<CardPageVisits projects={projects} />
					</div>
					<div className="w-full xl:w-4/12 px-4">
						<CardSocialTraffic />
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('dash state');
	console.log(state);
	return {
		projects: state.firestore.ordered.projects,
		prices: state.firestore.ordered.prices,
		auth: state.firebase.auth,
	};
};
export default compose(
	firestoreConnect(() => ['projects', 'prices']),
	connect(mapStateToProps)
)(Dashboard);
