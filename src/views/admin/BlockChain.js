import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import Election from '../../artifacts/contracts/Election.sol/Election.json';
import CardProfile from 'components/Cards/CardProfile';

// components
const ElAddr = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export default function BlockChain() {
	const [candidates, setCandidates] = useState([]);

	useEffect(() => {
		requestAccount();
		fetchCandidates();
		listenForVotes();
	}, []);

	async function requestAccount() {
		await window.ethereum.request({ method: 'eth_requestAccounts' });
	}

	//candidate that is fetchet from smart contract is an array so we taking out first three items
	const addCandidate = ([id, name, voteCount]) => {
		setCandidates((prev) => {
			const index = prev.map((c) => c.id).indexOf(id);
			if (index === -1) {
				return [
					...prev,
					{
						id,
						name,
						voteCount,
					},
				];
			} else {
				const copy = [...prev];
				copy[index] = { ...copy[index], voteCount };
				return copy;
			}
		});
	};
	const fetchCandidates = async () => {
		if (typeof window.ethereum !== 'undefiend') {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const contract = new ethers.Contract(ElAddr, Election.abi, provider);
			try {
				const count = await contract.candidatesCount();
				const promises = [...Array(count).keys()].map((i) => {
					return contract.candidates(++i);
				});
				const fetchedCandidates = await Promise.all(promises);
				fetchedCandidates.forEach((c) => {
					addCandidate(c);
				});
			} catch (err) {
				console.log(err);
			}
		}
	};
	const listenForVotes = () => {
		if (typeof window.ethereum !== 'undefiend') {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const contract = new ethers.Contract(ElAddr, Election.abi, provider);
			try {
				contract.on('votedEvent', (e) => {
					fetchCandidates();
				});
			} catch (err) {
				console.log(err);
			}
		}
	};
	const vote = async (id) => {
		if (typeof window.ethereum !== 'undefiend') {
			const [account] = await window.ethereum.request({
				method: 'eth_requestAccounts',
			});
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(ElAddr, Election.abi, signer);
			try {
				const transaction = await contract.vote(id, { from: account });
				await transaction.wait();
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<>
			<div className="flex flex-wrap">
				{candidates.map((i) => {
					return (
						<div key={i.id} className="w-full lg:w-6/12 px-4">
							<CardProfile candidate={i} onVote={(id) => vote(id)} />
						</div>
					);
				})}
			</div>
		</>
	);
}
