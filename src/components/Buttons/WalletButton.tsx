import { useTranslation } from 'react-i18next';
import { useEtherBalance, useEthers } from '@usedapp/core';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

import { ethers } from 'ethers';

import { Transition } from '@headlessui/react';
import { useState } from 'react';

import walletIcon from '../../resources/images/landing/walletIcon.svg';
import walletIconOver from '../../resources/images/landing/walletIconOver.svg';
import closeIcon from '../../resources/images/landing/modal/closeIcon.svg';
import etherIcon from '../../resources/images/landing/modal/ethereum.svg';
import metamaskIcon from '../../resources/images/landing/modal/metamask.svg';
import coinbaseIcon from '../../resources/images/landing/modal/coinbase.svg';
import walletConnection from '../../resources/images/landing/modal/walletConnection.svg';
import { displayAddress } from '../../helpers/getShortenedAddress';

const WalletButton = (props: buttonType) => {
  let [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation(['navbar']);
  const { account, activate, deactivate, active } = useEthers();

  const providerOptions = {
    /* See Provider Options Section */
    // injected: {
    //   display: {
    //     name: 'Metamask',
    //     description: 'Connect with the provider in your Browser',
    //   },
    //   package: null,
    // },
    // coinbasewallet: {
    //   package: CoinbaseWalletSDK,
    //   options: {
    //     appName: 'Web 3 Modal Demo',
    //     infuraId: process.env.INFURA_KEY,
    //   },
    // },
    // walletconnect: {
    //   package: WalletConnectProvider,
    //   options: {
    //     infuraId: '5280d46235c14d18b6daafee5196a01d',
    //   },
    // },
  };
  const web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true, // optional
    providerOptions,
  });

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    deactivate();
    console.log('after deactive, active?:', active);
  };

  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const ethersSigner = ethersProvider.getSigner();
    activate(provider);
  };

  return (
    <div className='flex items-center justify-center bg-gradient-to-r from-[#F2974A] to-[#F4E077] px-[2px] py-[1px] rounded-full'>
      <button
        onClick={account ? disconnectWallet : connectWallet}
        className={`group bg-[#151D31] hover:bg-transparent rounded-full text-[13px] leading-[22px] lg:text-[16px] ${
          props.black ? 'lg:bg-black ' : 'bg-[#151D31]'
        }`}
      >
        <div className='w-full flex items-center gap-1 px-[19px] md:px-[40px] xl:px-[48px] 2xl:px-[54.5px] py-[3px] sm:py-[5px] md:py-[10px]'>
          <img
            src={walletIcon}
            className='group-hover:hidden w-[18px] h-[16px]'
            alt='wallet'
          />
          <img
            src={walletIconOver}
            className='hidden group-hover:block w-[18px] h-[16px]'
            alt='wallet'
          />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077] group-hover:text-white group-hover:bg-inherit'>
            {account ? displayAddress(account) : t('connect_wallet')}
          </span>
        </div>
      </button>
      {/* <Transition
        show={isOpen}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div
          className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50'
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <div className='fixed top-[90px] md:top-[80px] right-[4vw] sm:right-[8.5vw] md:right-[10vw] w-[345px] md:w-[440px] rounded-[8px] bg-[#151D31] px-[29px] py-[20px] text-[12px] font-semibold leading-[21px] tracking-[1px] uppercase'>
          <div className='flex justify-between items-center'>
            <span className='text-[16px]'>選擇區塊網路</span>
            <img
              src={closeIcon}
              alt='close'
              className='cursor-pointer'
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>
          <div className='mt-[13px] w-[149px] h-[56px] bg-gradient-to-r from-[#F2974A] to-[#F4E077] rounded-[9px] p-[1px]'>
            <button className='w-full h-full rounded-[8px] bg-[rgb(68,68,69)] py-[17px] px-[18px] md:px-[25px] flex justify-between items-center'>
              <img src={etherIcon} alt='eth' />
              <span className='uppercase tracking-[1px] font-semibold'>
                ethereum
              </span>
            </button>
          </div>
          <div className='mt-[21px] flex flex-col gap-[13px]'>
            <span className='semibold text-[16px]'>選擇錢包</span>
            <div className='w-full p-[1px] bg-gradient-to-r from-[#F2974A] to-[#F4E077] bg-opacity-50 rounded-[9px]'>
              <button className='w-full rounded-[8px] py-[18px] px-[18px] md:px-[25px] flex justify-between uppercase text-[12px] leading-[21px] tracking-[1px] font-semibold bg-[rgb(46,52,68)]'>
                <img src={metamaskIcon} alt='meta' />
                <span>Metamask</span>
              </button>
            </div>
            <div className='w-full p-[1px] bg-white bg-opacity-50 rounded-[9px]'>
              <button className='w-full rounded-[8px] py-[18px] px-[18px] md:px-[25px] flex justify-between uppercase text-[12px] leading-[21px] tracking-[1px] font-semibold bg-[rgb(46,52,68)]'>
                <img src={coinbaseIcon} alt='meta' className='rounded-full' />
                <span>Coinbase Wallet</span>
              </button>
            </div>
            <div className='w-full p-[1px] bg-white bg-opacity-50 rounded-[9px]'>
              <button className='w-full rounded-[8px] py-[18px] px-[18px] md:px-[25px] flex justify-between uppercase text-[12px] leading-[21px] tracking-[1px] font-semibold bg-[rgb(46,52,68)]'>
                <img src={walletConnection} alt='meta' />
                <span>walletconnect</span>
              </button>
            </div>
          </div>
          <div className='mt-[19px] flex justify-center mb-[7px]'>
            <button className='w-[100px] h-[45px] bg-gradient-to-r from-[#F2974A] to-[#F4E077] rounded-[4px] text-[16px] font-semibold'>
              關閉
            </button>
          </div>
        </div>
      </Transition> */}
    </div>
  );
};

interface buttonType {
  black: any;
}

export default WalletButton;
