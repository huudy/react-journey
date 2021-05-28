require('@nomiclabs/hardhat-waffle');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
	const accounts = await ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: '0.8.4',
	paths: {
		artifacts: './src/artifacts',
	},
	networks: {
		hardhat: {
			chainId: 1337,
		},
		ropsten: {
			url: 'https://ropsten.infura.io/v3/a96b8e2476774cb8a59ed2a1900e4186',
			accounts: [
				'7b043bf642967d512b93e4b424bef89e6ac054616f9bc9942baf465bba4a4d81',
			],
		},
	},
};
