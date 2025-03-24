// time: o(n), space: o(n)
export const moveElementToEnd = (nums, target) => {
  const res = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      count++;
    }
    if (nums[i] !== target) {
      res.push(nums[i]);
    }
  }

  for (let i = 0; i < count; i++) {
    res.push(target);
  }

  return res;
};

// O(n);
export const moveElementToEndSolution1 = (nums, target) => {
  let nonIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      nums[nonIndex] = nums[i];
      nonIndex++;
    }
  }
  for (let i = nonIndex; i < nums.length; i++) {
    nums[i] = target;
  }
  return nums;
};

// O(n);
export const moveElementToEndSolution3 = (nums, target) => {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] === target && nums[j] !== target) {
      getSwapped(nums, i, j);
      i++;
      j++;
    } else if (nums[i] !== target) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return nums;
};

// O(logn);
export const moveElementToEndSolution2 = (nums, target) => {
  let leftP = 0;
  for (let rightP = 1; rightP < nums.length; rightP++) {
    if (nums[leftP] === target && nums[rightP] !== target) {
      getSwapped(nums, leftP, rightP);
      leftP++;
    }
  }
  return nums;
};

const getSwapped = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
  return nums;
};

const getWork = () => {
  let mySet = new Set([1, 3, 4]);
  mySet.add(5);
  mySet.delete(5);
  console.log(mySet.size);
  mySet.forEach((item) => {
    console.log(item);
  });

  let weakSet = new WeakSet();
  weakSet.add(5);
  weakSet.add("d");
  weakSet.delete("d");
  weakSet.forEach((item) => {
    console.log(item);
  });

  let myMap = new Map([["1", "hi"]]);
  myMap.set("2", "sdfs");
  myMap.delete("2");
  console.log(myMap.size);
  myMap.entries();
  for (let [key, value] of myMap) {
    console.log(key + " " + value);
  }

  for (let key of myMap.keys) {
    console.log(key);
  }
};

// eslint-disable-next-line
export default {
  moveElementToEnd,
  moveElementToEndSolution1,
  moveElementToEndSolution2,
  moveElementToEndSolution3,
};
