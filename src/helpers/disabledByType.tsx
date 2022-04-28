const isDisabled = (value: string) => {
  return (
    value !== 'other' &&
    value !== 'real_estate_discount' &&
    value !== 'dedicated_service' &&
    value !== 'utilityType_label'
  );
};

export default isDisabled;
