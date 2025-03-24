/* 
1768. Merge Strings Alternatively
You are given two strings word1 and word2. Merge the strings by adding letters in 
alternating order, starting with word1. If a string is longer than the other, append 
the additional letters onto the end of the merged string.

Return the merged string.

Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/

import MergeStringAlternately from "./MergeStringAlternately";

test("basic_MergeStringAlternately", () => {
  expect(MergeStringAlternately.mergeStringAlternatively("abc", "pqr")).toEqual(
    "apbqcr"
  );
});

test("second_MergeStringAlternately", () => {
  expect(MergeStringAlternately.mergeStringAlternatively("ab", "pqrs")).toEqual(
    "apbqrs"
  );
});

test("third_MergeStringAlternately", () => {
  expect(MergeStringAlternately.mergeStringAlternatively("abcd", "pq")).toEqual(
    "apbqcd"
  );
});

test("basic_MergeStringAlternately_better", () => {
  expect(
    MergeStringAlternately.mergeStringAlternativelyBetter("abc", "pqr")
  ).toEqual("apbqcr");
});

test("second_MergeStringAlternatelyBetter", () => {
  expect(
    MergeStringAlternately.mergeStringAlternativelyBetter("ab", "pqrs")
  ).toEqual("apbqrs");
});

test("third_MergeStringAlternatelyBetter", () => {
  expect(
    MergeStringAlternately.mergeStringAlternativelyBetter("abcd", "pq")
  ).toEqual("apbqcd");
});
