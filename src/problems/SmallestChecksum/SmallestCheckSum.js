// Time: O(nlogn) : Space: O(N)
function SmallestCheckSum(num) {
  let sumResult = num;
  while (sumResult >= 10) {
    const strNum = sumResult.toString();
    let strArray = [];
    for (let i = 0; i < strNum.length; i++) {
      strArray.push(Number(strNum.charAt(i)));
    }
    sumResult = 0;
    for (let i = 0; i < strArray.length; i++) {
      sumResult = sumResult += strArray[i];
    }
  }

  return sumResult;
}

// Time: O(nlogn) : Space: O(N)
function SmallestCheckSumBetter(num) {
  let sumResult = num;
  while (sumResult >= 10) {
    let strArray = [];
    const strNum = sumResult.toString();
    for (let i = 0; i < strNum.length; i++) {
      strArray.push(Number(strNum.charAt(i)));
    }
    sumResult = strArray.reduce((sum, num) => sum + num, 0);
  }

  return sumResult;
}

//eslint-disable-next-line
export default { SmallestCheckSum, SmallestCheckSumBetter };
