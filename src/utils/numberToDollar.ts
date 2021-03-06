const numberToDollar = (num: number): string => {
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export default numberToDollar;
