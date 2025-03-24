//Map - The map method is used to create a new array with the
//result of a callback function called on each element in the original array.
const mapOperation = (arr, number) => {
  const result = arr.map((item) => item + number);
  return result;
};

//Filter - The filter method is used to filter an array based on a certain condition.
const filterOperation = (arr) => {
  const filteredResult = arr.filter((item) => item % 2 === 0);
  return filteredResult;
};

//Reduce - The reduce method is used to reduce an array to a single value.
const reduceOperation = (arr) => {
  const result = arr.reduce((prev, next) => prev + next);
  return result;
};

// eslint-disable-next-line
export default { mapOperation, filterOperation, reduceOperation };
