const numberToObjectArray = (numArray: number[], keyName: string): object[] => {
  let objectArr: object[] = [];
  numArray.map((val) => {
    let newObj: { [key: string]: number } = {};
    newObj[keyName] = val;
    objectArr.push(newObj);
  });

  return objectArr;
};

export default numberToObjectArray;
