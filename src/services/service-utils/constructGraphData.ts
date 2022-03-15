const constructGraphData = (
  price_7d: number[],
  lastWeeksHoldings: number[]
): number[] => {
  let iterationCount = price_7d.length - 1; // Number of iterations
  let expectedToBeSelected = lastWeeksHoldings.length - 1; // Number of elements to be selected
  let resultsArray: number[] = [];

  if (expectedToBeSelected < 0 || expectedToBeSelected > iterationCount) {
    return resultsArray;
  }

  for (let i = 0; i < price_7d.length; i++) {
    if (expectedToBeSelected == 0) {
      resultsArray.push(price_7d[i]);
      break;
    }

    let selectedSoFar = Math.round((iterationCount * i) / expectedToBeSelected);

    if (selectedSoFar < price_7d.length) {
      resultsArray.push(price_7d[selectedSoFar]);
    } else {
      break; // If selectedSoFar is greater than the length then do not proceed further.
    }
  }

  for (let i = 0; i < lastWeeksHoldings.length; i++) {
    resultsArray[i] *= lastWeeksHoldings[i];
  }

  return resultsArray;
};

export default constructGraphData;
