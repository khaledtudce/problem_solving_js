//Time: O(n), Space:O(1)
function mergeStringAlternatively(word1, word2) {
  let result = "";
  let isWord1Smaler = true;
  if (word1.length > word2.length) {
    isWord1Smaler = false;
  }
  const minLength = Math.min(word1.length, word2.length);

  for (let i = 0; i < minLength; i++) {
    result += word1.charAt(i) + word2.charAt(i);
  }

  if (isWord1Smaler) result += word2.slice(minLength, word2.length);
  else result += word1.slice(minLength, word1.length);

  return result;
}

//Time: O(n), Space:O(1) but cleaner and clever
function mergeStringAlternativelyBetter(word1, word2) {
  let result = "";
  const maxLength = Math.max(word1.length, word2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }
  return result;
}

//eslint-disable-next-line
export default { mergeStringAlternatively, mergeStringAlternativelyBetter };
