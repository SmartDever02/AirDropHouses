export const DEBUG = true;
export const MAINNET_RPC_URL =
  'https://mainnet.infura.io/v3/5a99373559f8468eb4d40e15b3dd9812';
export const TESTNET_RPC_URL =
  'https://rinkeby.infura.io/v3/5a99373559f8468eb4d40e15b3dd9812';
export const HARDHAT_RPC_URL = 'http://localhost:8545';

export const contractAddress = '0xAdE429ba898c34722e722415D722A70a297cE3a2';

export const NETWORK_ID = DEBUG ? 31337 : 1;
export const RPC_URL = NETWORK_ID == 31337 ? HARDHAT_RPC_URL : MAINNET_RPC_URL;
export const NETWORK_NAME = DEBUG ? 'RinkeBy' : 'Mainnet';

export const OPENSEA_LINK = 'https://opensea.io/KanessaBrand';
export const WHITELIST_LIMIT = 300;

export const PRESALE_DATE = 'Apr 8, 2022';

const crypto = {
  ETH: 'ETH',
};

const config = {
  price: 0.15,
  type: crypto.ETH,

  discord_url: 'https://discord.gg/airdrophouses',
  instagram_url: 'https://www.instagram.com/airdrophouses',
  facebook_url: 'https://www.facebook.com/airdrophouses',
  twitter_url: 'https://twitter.com/airdrophouses',
  companies: {
    coOper_data_1: 'AIRDROP',
    coOper_data_2: 'HHEC',
    coOper_data_3: '',
    coOper_data_4: '',
    coOper_data_5: '',
  },
};

export default config;
