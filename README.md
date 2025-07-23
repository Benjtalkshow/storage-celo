
---


# Celo Alfajores Deployment - Hardhat & Foundry

This project demonstrates how to deploy and verify a simple `Storage.sol` smart contract to the Celo Alfajores Testnet using both **Hardhat** and **Foundry**.

---

##  Requirements

- Node.js & npm
- Hardhat (inside `hardhat/`)
- Foundry (installed globally)
- Celo wallet with testnet tokens
- `.env` files in both subfolders

---

## Deployed Contract Address

- `Storage.sol`: `0x...` (replace with actual address after deployment)

---

## Subprojects

### Hardhat

See [`hardhat/README.md`](./hardhat/README.md) for full instructions.

```bash
cd hardhat
npm install
npx hardhat run scripts/deploy.js --network alfajores
npx hardhat verify --network alfajores <address>

`cd foundry`
`forge build`
`forge script script/Deploy.s.sol:Deploy --rpc-url $CELO_ALFAJORES_RPC --private-key $PRIVATE_KEY --broadcast`
`forge verify-contract --chain 44787 <address> src/Storage.sol:Storage --etherscan-api-key $EXPLORER_API_KEY`