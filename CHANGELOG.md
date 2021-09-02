# Changelog

## 2.0.0

### Breaking changes
 * Removed the plugin `duplicated-networks` in favor of `hardhat-deploy-tag-network`.

### Features
 * Added support for OKExChain networks.
 * Added companion network configurations.
 * Added `hardhat-deploy-tag-network`, a plugin to add network tags through environment variable.
 * Added the migration helpers `skipIfNetworkIsLive` and `skipIfChainTypeIsNot`.

### Improvements
 * Updated dependencies to latest versions.

## 1.0.2

### Bugfixes
 * Updated dependency of `hardhat-deploy` for bugfixes.

## 1.0.1

### Bugfixes
 * Fixed lock file with wrong registry references.

## 1.0.0

### Breaking changes
 * New project structure with `@animoca/ethereu-hardhat-bootstrap`.

## 0.0.2
### Improvements
 * Deploy refuses to run on a production network without a gas price set.

## 0.0.1
 * Initial commit.
