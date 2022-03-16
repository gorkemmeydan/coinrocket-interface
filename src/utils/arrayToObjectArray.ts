const arrayToObjectArray = <T>(numArray: T[], keyName: string): object[] => {
  let objectArr: object[] = [];
  numArray.map((val) => {
    let newObj: { [key: string]: T } = {};
    newObj[keyName] = val;
    objectArr.push(newObj);
  });

  return objectArr;
};

export default arrayToObjectArray;
