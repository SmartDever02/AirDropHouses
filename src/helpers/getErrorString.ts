const getErrorString = (value?: string) => {
  var phrase1 = value?.replace(
    /Error: VM Exception while processing transaction: reverted with reason string '/i,
    ''
  );
  return phrase1?.replace(/'/i, '');
};

export default getErrorString;
