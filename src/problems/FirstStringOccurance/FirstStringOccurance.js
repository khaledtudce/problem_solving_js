var FindFirstStrOccur = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.charAt(i) === needle.charAt(i)) {
      const oldI = i;
      let j = i + 1;
      while (j < needle.length) {
        if (haystack.charAt(i + 1) === needle.charAt(j)) {
          i++;
          j++;
          if (j === needle.length) {
            return oldI;
          }
        } else break;
      }
    }
  }
  return -1;
};

// eslint-disable-next-line
export default { FindFirstStrOccur };
