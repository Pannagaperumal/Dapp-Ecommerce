# Dapp-Ecommerce: Decentralized E-Commerce Platform

## Overview
Dapp-Ecommerce is a blockchain-powered e-commerce platform that leverages decentralized technologies to create a transparent, secure, and direct marketplace for buyers and sellers.

## Features
- Decentralized product listings
- Secure blockchain-based transactions
- Smart contract-powered order management
- Transparent product verification
- Reduced intermediary costs
- Enhanced buyer and seller protection

## Technology Stack
- **Blockchain**: Ethereum
- **Smart Contracts**: Solidity
- **Frontend**: React
- **Web3 Integration**: Web3.js
- **Development Framework**: Hardhat
- **IPFS**: For decentralized file storage

## Prerequisites
- Node.js (v14+)
- MetaMask or Web3 wallet
- Ethereum testnet (Goerli/Sepolia)

## Installation

### Clone the Repository
```bash
git clone https://github.com/Pannagaperumal/Dapp-Ecommerce.git
cd Dapp-Ecommerce
```

### Install Dependencies
```bash
npm install
```

### Compile Smart Contracts
```bash
npx hardhat compile
```

### Deploy Contracts
```bash
npx hardhat run scripts/deploy.js --network <your-network>
```

## Running the Application
```bash
npm start
```

## Smart Contract Architecture
- **ProductMarketplace.sol**: Main marketplace contract
- **ProductNFT.sol**: Product verification and ownership tracking
- **PaymentSplitter.sol**: Transparent fund distribution

## Security Considerations
- Implements OpenZeppelin security standards
- Comprehensive access control mechanisms
- Audited smart contract code

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Pannaga Perumal - [@YourTwitter](https://twitter.com/YourTwitter)

Project Link: [https://github.com/Pannagaperumal/Dapp-Ecommerce](https://github.com/Pannagaperumal/Dapp-Ecommerce)
