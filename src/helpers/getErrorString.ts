const getErrorString = (value?: string) => {
  var phrase1 = value?.replace(
    /Error: VM Exception while processing transaction: reverted with reason string '/i,
    ''
  );
  var phrase2 = phrase1?.replace('execution reverted: ', '');
  return phrase2;
};

export default getErrorString;
