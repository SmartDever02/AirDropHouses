import closeIcon from '../../resources/images/landing/modal/closeIcon.svg';
import clientImage from '../../resources/images/landing/modal/client.png';
import DetailButton from '../Buttons/DetailButton';
import GoldenText from '../Typhography/GoldenText';

const RoadmapModal = (props: any) => {
  return (
    <div className='absolute z-20 w-screen 2xl:px-0 left-0 top-[795px] md:top-[150px] lg:top-[130px] xl:top-[155px] 2xl:top-[110px]'>
      <div className='w-[85vw] mx-auto xl:w-[75vw] xl:ml-[150px] 2xl:ml-0 bg-[#343444] rounded-[12px] pt-[20px] xl:pt-[36px]'>
        <div className='flex justify-end pr-[20px] lg:pr-[36px]'>
          <img
            src={closeIcon}
            alt='close'
            className='cursor-pointer'
            onClick={() => {
              props.onClose();
              // setIsOpen(false);
            }}
          />
        </div>
        <div className='flex flex-col md:flex-row gap-[25px] xl:gap-[36px] ml-[20px] mr-[20px] lg:ml-[20px] lg:mr-[35px] 2xl:ml-[73px] 2xl:mr-[93px] mt-[8.5px] items-center pb-[40px] xl:pb-[58px]'>
          <div className='w-[236px] h-[160px] md:h-auto overflow-hidden md:overflow-auto rounded-[36px] md:w-[38%] xl:w-[33%]'>
            <img src={clientImage} alt='owner' className='w-full' />
          </div>
          <div className='w-full md:w-[62%] xl:w-[66%] flex flex-col gap-[15px] xl:gap-[22px] text-white font-bold text-[13px] lg:text-[17px] xl:text-[18px] leading-[22px]'>
            <span className='text-center md:text-left px-[20px] sm:px-[30px] md:px-[0] text-[16px] md:text-[25px] leading-[28px] lg:text-[30px] lg:leading-[40px] xl:text-[35px] xl:leading-[58px] tracking-[4px] md:tracking-[0px] lg:tracking-[5px]'>
              <GoldenText>不只是晉升有房族、質感設計一次滿足。</GoldenText>
            </span>

            <div className='flex flex-col gap-[10px]'>
              <h5 className='text-center md:text-left'>設計師簡介：</h5>
              <span className='leading-[175%] font-normal md:font-bold'>
                「臺式風格」設計的代表人物，台灣新生代設計界的領軍人物。16年來致力於追求回歸空間本質的優質室內設計，創作來自「人」，從室內建築理念出發，主題概念與空間陳述為輔佐，講求非表面鋪陳，而是內在美學展演，是突顯一種生活態度。
                <br />- ArchDaily
              </span>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h5 className='text-center md:text-left'>經歷與得獎：</h5>
              <span className='leading-[175%] font-normal md:font-bold'>
                中國室內設計十大年度人物 / 中國空間陳設行業領軍人物 /
                遠域生活(深圳)設計有限公司/近境制作設計有限公司設計總監 /
                安邸AD100中國最具影響力100位設計精英 / Andrew
                Martin國際室內設計大獎得主 / 義大利A‘ design鉑金獎得主 /
                北京清華大學軟裝研修班講師 / 深圳市創想公益基金會專家顧問
              </span>
            </div>
            <DetailButton>更多介紹</DetailButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapModal;
