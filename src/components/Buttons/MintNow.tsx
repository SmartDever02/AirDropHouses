const MintNow = (props: any) => {
  return (
    <button
      onClick={() => {
        props.clickHandle();
      }}
      className='w-full h-[29px] md:h-[46px] rounded-[8px] bg-gradient-to-r from-[#F2974A] to-[#F4E077] hover:from-[#F4E077] hover:to-[#F2974A] text-center text-white font-bold'
    >
      購買NFT
    </button>
  );
};

export default MintNow;
