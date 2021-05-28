const { expect } = require('chai');

describe('Election', function () {
	const Election = await ethers.getContractFactory('Election');
	const election = await Election.deploy();
	it('Should return two candidates', async function () {
		await election.deployed();
		expect(await election.candidatesCount()).to.equal(2);
	});
	it('Should not get any votes', async function () {
		await election.deployed();
		expect(await election.candidatesCount()).to.equal(2);
	});
	it('Should get one vote each', async function () {
		await election.deployed();
		expect(await election.candidatesCount()).to.equal(2);
	});
});
