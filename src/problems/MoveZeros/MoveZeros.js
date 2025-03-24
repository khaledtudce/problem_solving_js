// time: O(n), space: O(n)
function moveZeroes(nums) {
  let zeroCounter = 0;
  let resultNum = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      resultNum.push(nums[i]);
    } else {
      zeroCounter++;
    }
  }
  for (let i = 0; i < zeroCounter; i++) {
    resultNum.push(0);
  }
  return resultNum;
}

// time: O(n), space: O(n)
function moveZeroesBetter(nums) {
  let lastNonZeroIndex = 0;
  let resultNum = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      resultNum.push(nums[i]);
      lastNonZeroIndex++;
    }
  }
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    resultNum.push(0);
  }
  return resultNum;
}

// time: O(n), space: O(1)
function moveZeroesMoreBetter(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      index++;
    }
  }
  return nums;
}

//eslint-disable-next-line
export default { moveZeroes, moveZeroesBetter, moveZeroesMoreBetter };
