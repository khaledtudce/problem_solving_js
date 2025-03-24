// Time: O(n) || Space: O(n)
function reverseVowelOfStringBetter(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const chars = s.split(""); // Convert string to array
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-vowel characters
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }
    // Swap vowels
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join(""); // Convert array back to string
}

// Time: O(n) || Space: O(n)
function reverseVowelOfString(str) {
  let strArr = [...str];
  let start = 0;
  let end = str.length - 1;
  while (start < str.length / 2) {
    if (isVowel(strArr[start]) && isVowel(strArr[end])) {
      [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
      start++;
      end--;
    } else if (isVowel(strArr[start])) {
      end--;
    } else if (isVowel(strArr[end])) {
      start++;
    } else {
      start++;
      end--;
    }
  }
  return strArr.join("");
}

function isVowel(char) {
  const charSmall = char.toLowerCase();
  return "aeiou".includes(charSmall);
}

//eslint-disable-next-line
export default { reverseVowelOfStringBetter, reverseVowelOfString };
