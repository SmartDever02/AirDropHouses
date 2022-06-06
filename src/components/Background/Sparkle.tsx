const colors = ['#89DDFB', '#FFFFFF'];
const Sparkle = (props: sparkeType) => {
  const key = Math.random();
  const range = Math.floor(key * 6) + 'px';

  const top = () => {
    let key = Math.random();
    return Math.floor(key * props.height) + 80 + 'px';
  };

  const left = () => {
    let key = Math.random();
    return Math.floor(key * 3560) + 80 + 'px';
  };

  const delay = () => {
    let key = Math.random();
    return Math.floor(key * 2000) + 'ms';
  };

  return (
    <div
      className='rounded-full absolute animate-pulse'
      style={{
        top: top(),
        left: left(),
        width: range,
        height: range,
        backgroundColor: colors[Math.floor(key * 2)],
        animationDelay: delay(),
      }}
    ></div>
  );
};

interface sparkeType {
  height: number;
}

export default Sparkle;
