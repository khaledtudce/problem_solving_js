// Time: O(n2) || Space: O(1)
function SumOfTwo(array1, array2, sumToLookFor) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] + array2[j] === sumToLookFor) {
        result.push([i, j]);
      }
    }
  }
  return result;
}

// Time: O(nlogn) || Space: O(n)
function SumOfTwoBetter(array1, array2, sumToLookFor) {
  let result = [];
  const objArr = [];
  for (let i = 0; i < array1.length; i++) {
    objArr.push({ key: i.toString(), value: array1[i] });
  }
  for (let i = 0; i < array2.length; i++) {
    const requiredValue = sumToLookFor - array2[i];
    if (objArr.some((item) => item.value === requiredValue)) {
      const item = objArr.find((item) => item.value === requiredValue);
      result.push([Number(item.key), i]);
    }
  }
  return result;
}

// Time: O(n) || Space: O(n)
function SumOfTwoEvenBetter(array1, array2, sumToLookFor) {
  let result = [];
  const map = new Map();

  // Store elements of array1 in a Map (value -> index)
  for (let i = 0; i < array1.length; i++) {
    map.set(array1[i], i);
  }

  // Check if the complement exists in the map
  for (let j = 0; j < array2.length; j++) {
    const requiredValue = sumToLookFor - array2[j];
    // costs O(1)
    if (map.has(requiredValue)) {
      result.push([map.get(requiredValue), j]);
    }
  }

  return result;
}

// eslint-disable-next-line
export default { SumOfTwo, SumOfTwoBetter, SumOfTwoEvenBetter };
