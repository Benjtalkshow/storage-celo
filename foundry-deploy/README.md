
# Foundry - Storage Contract on Celo Alfajores

This subproject contains the Foundry setup for deploying and verifying the `Storage.sol` contract on Celo Alfajores Testnet.

##  Project Structure

- `src/Storage.sol`: The smart contract
- `script/Deploy.s.sol`: Deployment script
- `foundry.toml`: Foundry configuration
- `.env`: Stores private key and RPC info

##  Build

```bash
forge build

forge script script/Deploy.s.sol:Deploy --rpc-url $CELO_ALFAJORES_RPC --private-key $PRIVATE_KEY --broadcast

forge verify-contract \
  --chain 44787 \
  <deployed_contract_address> \
  src/Storage.sol:Storage \
  --etherscan-api-key $EXPLORER_API_KEY

PRIVATE_KEY=your_private_key
CELO_ALFAJORES_RPC=https://alfajores-forno.celo-testnet.org
EXPLORER_API_KEY=your_celoscan_api_key

[Proof](images/screenshot.png)