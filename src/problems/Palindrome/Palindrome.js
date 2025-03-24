const isPalindrome = (s) => {
  let sLength = s.length;
  for (let i = 0; i < s.length / 2; i++) {
    if (s.charAt(i) === s.charAt(sLength - 1)) {
      sLength--;
    } else return false;
  }
  return true;
};

// eslint-disable-next-line
export default { isPalindrome };
