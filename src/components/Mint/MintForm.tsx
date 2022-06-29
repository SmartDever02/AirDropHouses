import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useEtherBalance, useEthers } from '@usedapp/core';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useNFTPrice from '../../hooks/useNFTPrice';
import { useMintNormal, useMintWhitelist } from '../../hooks/useMint';
import useSaleMode from '../../hooks/useSaleMode';
import useTimePast from '../../hooks/useTimePast';

import config, { MINT_TEST } from '../../config/config';
import MintNow from '../Buttons/MintNow';
import GoldenText from '../Typhography/GoldenText';
import Gradient from '../Typhography/GradientTitle';
import EtherInput from './EtherInput';
import MintInput from './MintInput';
import {
  getInfoFromJSON,
  getWhiteListInfo,
} from '../../helpers/verifyWhitelist';
import getErrorString from '../../helpers/getErrorString';
import { getBatchNum } from '../../helpers/getFormattedTime';
import useBatchDuration from '../../hooks/test/useBatchDuration';
import useMintedCount from '../../hooks/useMintedCount';
import useSheetsPerPrice from '../../hooks/test/useSheetsPerPrice';

// const getBatchNum = (time: number) => {
//   return Math.floor(time / 7200) + 1; // 7200 : 2hours
// };

const MintForm = () => {
  const { account, active } = useEthers();
  const balance = useEtherBalance(account);
  const [count, setCount] = useState(1);
  const price = useNFTPrice();
  const saleMode = useSaleMode();
  const timePast = useTimePast().toNumber();
  const mintedCount = useMintedCount().toNumber();

  // TEST
  const batchDuration = useBatchDuration().toNumber();
  const sheetsPerPrice = useSheetsPerPrice().toNumber();
  // TEST

  const { t } = useTranslation(['minting']);

  const { state: stateForMintNormal, send: mintNormal } = useMintNormal();
  const { state: stateForMintWhitelist, send: mintWhitelist } =
    useMintWhitelist();

  useEffect(() => {
    if (stateForMintNormal) {
      console.log(stateForMintNormal.status);
      stateForMintNormal.status === 'Exception' &&
        toast.error(getErrorString(stateForMintNormal.errorMessage));
      stateForMintNormal.status === 'Success' && toast.success('Mint success!');
    }
    if (stateForMintWhitelist) {
      stateForMintWhitelist.status === 'Exception' &&
        //console.log(stateForMintWhitelist.errorMessage);
        toast.error(getErrorString(stateForMintWhitelist.errorMessage));
      stateForMintWhitelist.status === 'Success' &&
        toast.success('Mint success!');
    }

    // console.log('status: ', stateForMintNormal, stateForMintWhitelist);
  }, [stateForMintNormal, stateForMintWhitelist]);

  const HandleMint = async () => {
    if (!active || !account) {
      toast.warning('Please connect your wallet!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    if (saleMode === 'pre') {
      //presale
      const data = getInfoFromJSON(account);
      console.log('result:', data);
      // alert('data from function ' + JSON.stringify(data));
      if (!data.verified) {
        toast.warning('You are not Whitelist member', {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      if (count > data.limit) {
        toast.warning(
          `You are not allowed to mint ${count} sheets, your limit is ${data.limit}`
        );
        setCount(data.limit);
        return;
      }
      // alert(data.limit);
      await mintWhitelist(account, data.limit, data.proof, count, {
        value: price.mul(count),
      });
    } else if (saleMode === 'public') {
      await mintNormal(account, count, {
        value: price.mul(count),
      });
    } else {
      // alert('No Action!!!');
    }
    setCount(1);
  };

  const isPublicSale = () => {
    return saleMode === 'public';
  };

  useEffect(() => {
    console.log(timePast / 3600);
    count <= 0 && setCount(1);
  });

  const shouldDisabled = () => {
    if (saleMode === 'pre') {
      return stateForMintWhitelist.status === 'Mining' ||
        stateForMintWhitelist.status === 'PendingSignature' ||
        getBatchNum(timePast, MINT_TEST ? batchDuration : 7200) >= 10 ||
        mintedCount >= MINT_TEST
        ? sheetsPerPrice * 3
        : 1500;
    } else if (saleMode === 'public') {
      return (
        stateForMintNormal.status === 'Mining' ||
        stateForMintNormal.status === 'PendingSignature'
      );
    }
  };

  return (
    <div className='select-none Mint_NFT w-[90%] md:w-auto lg:h-[410px] xl:h-[470px] 2xl:h-[531px] lg:z-10 lg:mr-[20px] xl:mr-[32px] rounded-[8px] bg-[#343444] pt-[25px] 2xl:pt-[31px] pb-[39px] md:pb-[50px] 2xl:pb-[85px] px-[28px] md:px-[35px] xl:px-[40px] 2xl:px-[47px] lg:-translate-x-[18vw] xl:-translate-x-[15vw] 2xl:-translate-x-[10vw] lg:mt-[120px] xl:mt-[60px] 2xl:mt-[136px]'>
      <div className='uppercase font-bold text-center text-[22px] md:text-[32px] lg:text-[28px] xl:text-[30px] 2xl:text-[36px] 2xl:leading-[44px]'>
        <GoldenText>{t('mint_' + saleMode + '_sale_title')}</GoldenText>
        {/* text change: mint_pre_sale, mint_public_sale */}
        {/* <GoldenText>{t('mint_' + status + '_sale_title')}</GoldenText> */}
      </div>
      <div className='font-normal leading-[30px] text-[12px] md:text-[20px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-center md:w-[380px] lg:w-[300px] xl:w-[390px] 2xl:w-[470px]'>
        {/* text change: mint_pre_sale_subtitle_batch_1, mint_pre_sale_subtitle_batch_1_2, mint_pre_sale_subtitle_batch_1_2_3, mint_public_sale_subtitle */}
        <GoldenText>
          {/* {t('mint_' + status + '_sale_subtitle' + batch)} */}
          {saleMode !== 'pre'
            ? t('mint_' + saleMode + '_sale_subtitle')
            : getBatchNum(timePast, MINT_TEST ? batchDuration : 7200) >= 10
            ? 'Presale Finished'
            : t(
                'mint_pre_sale_subtitle_batch_' +
                  Math.min(
                    getBatchNum(timePast, MINT_TEST ? batchDuration : 7200),
                    3
                  )
              )}
        </GoldenText>
      </div>
      <div className='JamesInputGroup mt-[33px] 2xl:mt-[63px] flex flex-col gap-[16px] md:gap-[15px] xl:gap-[27.25px]'>
        <EtherInput
          preText={t('mint_price')}
          value={parseFloat(ethers.utils.formatEther(price))}
          priceType={config.type}
        />
        <MintInput
          preText={t('mint_amount')}
          value={count}
          onChange={(val: any) => setCount(val)}
        />
        <EtherInput
          preText={isPublicSale() ? t('mint_total_price') : '總共'}
          value={parseFloat(ethers.utils.formatEther(price.mul(count)))}
          priceType={config.type}
        />
      </div>
      <div className='mt-[20px] md:mt-[33px] text-[12px] leading-[13px] md:text-[20px] md:leading-[22px]'>
        <MintNow clickHandle={HandleMint} disable={shouldDisabled()} />
        {/* <MintNow clickHandle={HandleMint} /> */}
        {!isPublicSale() && (
          <p className='cursor-pointer text-[14px] text-center mt-[15px] lg:mt-[20px] xl:mt-[30px]'>
            <span className='decoration-[#F2974A] underline decoration-1 text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077] hover:decoration-[#f4cc77] hover:from-[#F4E077] hover:to-[#F2974A]'>
              <a target='_blank' href={config.discord_url} rel='noreferrer'>
                {t('join_discord_for_whitelist')}
              </a>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
export default MintForm;
