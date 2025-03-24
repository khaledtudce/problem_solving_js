// Time: O(n, n): Space:O(1) || simpler
function IsSubsequence(s, t) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s.charAt(i) === t.charAt(j)) {
      i++;
    }
    j++;
  }

  return i === s.length;
}

// Time: O(n, logn): Space:O(1) ||
// better solution because in some case it does not has to go to end of j
function IsSubsequenceBetter(s, t) {
  if (s === "") return true;
  let isSubsequenceFound = false;
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s.charAt(i) === t.charAt(j)) {
      i++;
      j++;
      if (i === s.length) {
        return true;
      }
    } else if (j < t.length) {
      j++;
    }
  }

  return isSubsequenceFound;
}

//eslint-disable-next-line
export default {
  IsSubsequence: IsSubsequenceBetter,
  IsSubsequenceBetter: IsSubsequence,
};
