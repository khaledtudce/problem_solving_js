// Time: O(n * m + m * n) ≈ O(n * m) || Space: O(n+m || n)
function FindDiffTwoArrays(nums1, nums2) {
  let finalArr = [];
  let num1Diff = [];
  for (let i = 0; i < nums1.length; i++) {
    // includes takes O(n) time
    if (!nums2.includes(nums1[i]) && !num1Diff.includes(nums1[i])) {
      num1Diff.push(nums1[i]);
    }
  }
  let num2Diff = [];
  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i]) && !num2Diff.includes(nums2[i])) {
      num2Diff.push(nums2[i]);
    }
  }
  finalArr.push(num1Diff);
  finalArr.push(num2Diff);
  return finalArr;
}

// Time: O(n+m | n) || Space: O(n+m | n) || cleaner solution
function FindDiffTwoArraysBetter(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  const num1Diff = [...set1].filter((num) => !set2.has(num));
  const num2Diff = [...set2].filter((num) => !set1.has(num));
  return [num1Diff, num2Diff];
}

//eslint-disable-next-line
export default { FindDiffTwoArrays, FindDiffTwoArraysBetter };
