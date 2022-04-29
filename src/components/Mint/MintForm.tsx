import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useEtherBalance, useEthers } from '@usedapp/core';
import useNFTPrice from '../../hooks/useNFTPrice';
import { useMintNormal, useMintWhitelist } from '../../hooks/useMint';
import useSaleMode from '../../hooks/useSaleMode';

import config from '../../config/config';
import MintNow from '../Buttons/MintNow';
import GoldenText from '../Typhography/GoldenText';
import Gradient from '../Typhography/GradientTitle';
import EtherInput from './EtherInput';
import MintInput from './MintInput';

const MintForm = () => {
  const { account, active } = useEthers();
  const balance = useEtherBalance(account);
  const [count, setCount] = useState(1);
  const price = useNFTPrice();
  const saleMode = useSaleMode();
  const { t } = useTranslation(['minting']);

  const { state: stateForMintNormal, send: mintNormal } = useMintNormal();
  const { state: stateForMintWhitelist, send: mintWhitelist } =
    useMintWhitelist();

  useEffect(() => {
    let msg = stateForMintNormal.errorMessage
      ? stateForMintNormal.errorMessage
      : '{}';
    stateForMintNormal.status === 'Exception' && alert(msg);
    //alert(stateForMintNormal.errorMessage);
  }, [stateForMintNormal]);

  const HandleMint = async () => {
    alert('saleMode is ' + saleMode);
    if (!active || !account) {
      alert('Please connect your wallet!');
      return;
    }
    let result: any;
    if (saleMode === 'PRESALE') {
      result = await mintWhitelist(account, count, {
        value: price.mul(count),
      });
    } else if (saleMode === 'PUBLIC_SALE') {
      result = await mintNormal(account, count, {
        value: price.mul(count),
      });
    } else {
      alert('No Action!!!');
    }
    setCount(1);

    /*
    if (useSaleMode) {
      await mintWhitelist(account, count, {
        value: price.mul(count),
      });
    }
    */
    //alert('mint');
  };

  const isPublicSale = () => {
    return saleMode === 'PUBLIC_SALE';
  };

  useEffect(() => {
    count <= 0 && setCount(1);
  });

  return (
    <div className='Mint_NFT w-[90%] md:w-auto lg:h-[410px] xl:h-[470px] 2xl:h-[531px] lg:z-10 lg:mr-[20px] xl:mr-[32px] rounded-[8px] bg-[#343444] pt-[25px] 2xl:pt-[31px] pb-[39px] md:pb-[50px] 2xl:pb-[85px] px-[28px] md:px-[35px] xl:px-[40px] 2xl:px-[47px] lg:-translate-x-[18vw] xl:-translate-x-[15vw] 2xl:-translate-x-[10vw] lg:mt-[120px] xl:mt-[60px] 2xl:mt-[136px]'>
      <div className='uppercase font-bold text-center text-[22px] md:text-[32px] lg:text-[28px] xl:text-[30px] 2xl:text-[36px] 2xl:leading-[44px]'>
        {/* text change: mint_pre_sale, mint_public_sale */}
        <GoldenText>{isPublicSale() ? t('mint_title') : 'Pre-Sale'}</GoldenText>
      </div>
      <div className='font-normal leading-[30px] text-[12px] md:text-[20px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-center md:w-[380px] lg:w-[300px] xl:w-[390px] 2xl:w-[470px]'>
        {/* text change: mint_pre_sale_subtitle_batch_1, mint_pre_sale_subtitle_batch_1_2, mint_pre_sale_subtitle_batch_1_2_3, mint_public_sale_subtitle */}
        <GoldenText>
          {isPublicSale() ? t('mint_title_sale_subtitle') : '第一梯次白名單'}
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
        <MintNow clickHandle={HandleMint} />
        {!isPublicSale() && (
          <p className='cursor-pointer text-[14px] text-center lg:mt-[20px] xl:mt-[30px]'>
            <span className='decoration-[#F2974A] underline decoration-1 text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077] hover:decoration-[#f4cc77] hover:from-[#F4E077] hover:to-[#F2974A]'>
              獲取白名單資格
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
export default MintForm;
