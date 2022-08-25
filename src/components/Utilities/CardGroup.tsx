import cardChance from '../../resources/images/utilities/cards/cardChance.png';
import cardFate from '../../resources/images/utilities/cards/cardFate.png';

const CardGroup = () => {
  return (
    <div className='card-group absolute -right-[5vw] md:-right-[3vw] lg:-right-[1vw] xl:-right-[4vw] 2xl:-right-[4vw] 3xl:right-[14vw] -top-[15vw] md:-top-[11vw] lg:-top-[14vw] xl:-top-[15vw] 2xl:-top-[17.7vw] 3xl:-top-[12vw] flex gap-[10px] 2xl:gap-[30px] rotate-[-15deg]'>
      <div className='w-[60px] md:w-[115px] lg:w-[150px] xl:w-[215px] 2xl:w-[286px] flex flex-col gap-[5px] 2xl:gap-[20px]'>
        <img src={cardChance} alt='chance' />
        <img src={cardFate} alt='fate' />
      </div>
      <div className='w-[72px] md:w-[130px] lg:w-[180px] xl:w-[250px] 2xl:w-[326px] pt-[70px] md:pt-[120px] lg:pt-[180px] xl:pt-[230px] 2xl:pt-[350px]'>
        <img src={cardChance} alt='chance' />
      </div>
    </div>
  );
};

export default CardGroup;
