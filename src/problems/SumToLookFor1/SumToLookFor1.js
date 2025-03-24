//Time: O(n2) | Space: O(1)
function SumToLookFor(array1, array2, sumToLookFor) {
  let result = [];
  array1.forEach((numArr1, indexArr1) => {
    array2.forEach((numArr2, indexArr2) => {
      if (numArr1 + numArr2 === sumToLookFor) {
        result.push([indexArr1, indexArr2]);
      }
    });
  });
  return result;
}

//Time: O(nlogn) | Space: O(n)
function SumToLookForBetter(array1, array2, sumToLookfor) {
  let result = [];
  let object = [];
  array1.forEach((num, index) => {
    object.push({ key: index.toString(), value: num });
  });
  array2.forEach((num, index) => {
    let targetedSecondNum = sumToLookfor - num;
    if (object.some((item) => item.value === targetedSecondNum)) {
      const entry = object.find((item) => item.value === targetedSecondNum);
      result.push([Number(entry.key), index]);
    }
  });
  return result;
}

//Time: O(n) | Space: O(n)
function SumToLookForEvenBetter(array1, array2, sumToLookfor) {
  let result = [];
  let map = new Map();
  array1.forEach((num, index) => {
    map.set(num, index);
  });
  array2.forEach((num, index) => {
    let targetedSecondNum = sumToLookfor - num;
    if (map.has(targetedSecondNum)) {
      result.push([map.get(targetedSecondNum), index]);
    }
  });
  return result;
}

//eslint-disable-next-line
export default {
  SumToLookFor,
  SumToLookForBetter,
  SumToLookForEvenBetter,
};
