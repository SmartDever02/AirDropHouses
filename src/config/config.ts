export const DEBUG = true;
export const MAINNET_RPC_URL =
  'https://mainnet.infura.io/v3/5a99373559f8468eb4d40e15b3dd9812';
export const TESTNET_RPC_URL =
  'https://rinkeby.infura.io/v3/5a99373559f8468eb4d40e15b3dd9812';
export const HARDHAT_RPC_URL = 'http://localhost:8545';

export const contractAddress = '0xB7EE71b40c4e7BFeA786ac2e7e735322C268E7eC';
// Hard hat 31337
export const NETWORK_ID = DEBUG ? 4 : 1;
export const RPC_URL = NETWORK_ID === 4 ? TESTNET_RPC_URL : MAINNET_RPC_URL;
export const NETWORK_NAME = DEBUG ? 'Rinkeby' : 'Mainnet';

export const MINT_TEST = true;

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
  whitepaper_url: 'https://whitepaper.airdrophouses.com',
  contact_us_url: 'webmaster@airdrophouses.com',
  statement_url:
    'https://www.dropbox.com/s/z0cj92atqujl3s4/1110515-%E5%BE%8B%E5%B8%AB%E8%81%B2%E6%98%8E%E7%A8%BF-%E7%A9%BA%E6%8A%95%E5%AE%B6.pdf?dl=0',
  companies: {
    coOper_data_1: 'AIRDROP',
    coOper_data_2: 'HHEC',
    coOper_data_3: '',
    coOper_data_4: '',
    coOper_data_5: '',
  },
};

export default config;
