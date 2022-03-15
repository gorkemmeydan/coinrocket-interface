const toFixedNumber = (num: number, digits: number, base?: number): number => {
  var pow = Math.pow(base || 10, digits);
  return Math.round(num * pow) / pow;
};

export default toFixedNumber;
