const isCoinExistInCoinIdArr = (
  coins: string[],
  selectedCoin: string
): boolean => {
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] === selectedCoin) return true;
  }
  return false;
};

export default isCoinExistInCoinIdArr;
