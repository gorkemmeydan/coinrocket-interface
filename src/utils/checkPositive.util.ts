// we use zero as a positive for plotting
const checkPositive = (num: number): boolean => {
  const sign = Math.sign(num);
  if (sign === -1) return false;
  return true;
};

export default checkPositive;
