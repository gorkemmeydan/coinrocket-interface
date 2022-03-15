const calculateChangePercent = (start: number, end: number) => {
  let percent;
  if (end !== 0) {
    if (start !== 0) {
      percent = ((end - start) / start) * 100;
    } else {
      percent = end * 100;
    }
  } else {
    percent = -start * 100;
  }
  // return Math.floor(percent);
  return percent;
};

export default calculateChangePercent;
