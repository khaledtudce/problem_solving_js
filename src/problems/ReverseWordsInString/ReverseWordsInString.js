//Time: O(n) || Space: O(n)
function ReverseWordInString(s) {
  const srtArr = s.split(" ");
  let cleanArr = srtArr.filter((item) => item !== "");
  cleanArr.reverse();
  return cleanArr.join(" ");
}

//Time: O(n) || Space: O(n)
function ReverseWordInStringBetter(s) {
  const strArr = s.trim().split(/\s+/);
  const reversedArr = strArr.reverse();
  return reversedArr.join(" ");
}

//eslint-disable-next-line
export default { ReverseWordInString, ReverseWordInStringBetter };
