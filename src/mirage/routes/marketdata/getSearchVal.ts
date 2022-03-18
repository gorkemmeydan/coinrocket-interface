import { Request } from 'miragejs';

const getSearchVal = (request: Request) => {
  const searchVals = require('../../fixtures/searchValData.json');
  return searchVals;
};

export default getSearchVal;
