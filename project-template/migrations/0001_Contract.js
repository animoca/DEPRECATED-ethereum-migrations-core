const {
  skipIfContractExists,
  // skipIfChainIdIs,
  multiSkip,
} = require('@animoca/ethereum-migrations-core/hardhat-plugins/hardhat-deploy-migrations/migrations');

module.exports = async (hre) => {
  const {deploy, log} = hre.deployments;
  const {deployer} = await hre.getNamedAccounts();

  log('Deploying Contract...');
  const Contract = await deploy('Contract', {
    contract: 'Contract',
    from: deployer,
    log: true,
  });
};
module.exports.skip = multiSkip([
  // skipIfChainIdIs(['1']), // mainnet guard
  skipIfContractExists('Contract'), // contract guard
]);
module.exports.tags = ['Contract'];
