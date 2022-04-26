const isDisabled = (value: string) => {
  return (
    value !== 'other' &&
    value !== 'real_estate_discount' &&
    value !== 'dedicated_service'
  );
};

export default isDisabled;
