# Hardhat - Storage Contract on Celo Alfajores

This subproject contains the Hardhat implementation for deploying and verifying the `Storage.sol` contract to the Celo Alfajores Testnet.

## Project Structure

- `contracts/Storage.sol`: The smart contract
- `scripts/deploy.js`: Script to deploy the contract
- `hardhat.config.js`: Hardhat configuration
- `.env`: Stores your private key and CeloScan API key

## Deployment

```bash
npx hardhat run scripts/deploy.js --network alfajores

npx hardhat verify --network alfajores <deployed_contract_address>

PRIVATE_KEY=your_private_key
CELO_ALFAJORES_RPC=https://alfajores-forno.celo-testnet.org
CELOSCAN_API_KEY=your_celoscan_api_key

[Proof](https://alfajores.celoscan.io/address/0x5Fcb235F00CCC9871Ca96b1e29cC1B2cc4e15053#code)