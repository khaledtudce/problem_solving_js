export const removeDuplicates = function (nums) {
  let result = [];
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] != nums[i + 1]) result.push(nums[i]);
    else if (nums.length === nums[i + 1] && result.length - 1 != nums[i])
      result.push(nums[i]);
  }
  return result;
};

// eslint-disable-next-line
export default { removeDuplicates };
