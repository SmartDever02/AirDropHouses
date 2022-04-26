import Sparkle from './Sparkle';

const TwinkleBackground = (props: backType) => {
  var rows = [];
  for (var i = 0; i < 200; i++)
    rows.push(<Sparkle key={i} height={props.height ? props.height : 1500} />);

  return (
    <>
      <div
        className={`hidden md:block ${
          props.position === 'fixed' ? 'fixed' : 'relative'
        }`}
      >
        {rows.map((one) => one)}
      </div>
    </>
  );
};

interface backType {
  height?: number;
  position: 'fixed' | 'relative';
}

export default TwinkleBackground;
