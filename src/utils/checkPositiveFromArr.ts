// we use zero as a positive for plotting
const checkPositiveFromArr = (num: number[]): boolean => {
  if (num[0] > num[num.length - 1]) return false;
  return true;
};

export default checkPositiveFromArr;
