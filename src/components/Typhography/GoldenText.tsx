export default function GoldenText(props: any) {
  return (
    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077]'>
      {props.children}
    </span>
  );
}
