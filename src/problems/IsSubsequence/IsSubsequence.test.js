/* 
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting 
some (can be none) of the characters without disturbing the relative positions of the remaining 
characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
*/

import IsSubsequence from "./IsSubsequence";

test("basic_IsSubsequence", () => {
  expect(IsSubsequence.IsSubsequence("abc", "ahbgdc")).toEqual(true);
});

test("second_IsSubsequence", () => {
  expect(IsSubsequence.IsSubsequence("axc", "ahbgdc")).toEqual(false);
});

test("third_IsSubsequence", () => {
  expect(IsSubsequence.IsSubsequence("acb", "ahbgcd")).toEqual(false);
});

test("basic_IsSubsequenceBetter", () => {
  expect(IsSubsequence.IsSubsequenceBetter("abc", "ahbgdc")).toEqual(true);
});

test("second_IsSubsequenceBetter", () => {
  expect(IsSubsequence.IsSubsequenceBetter("axc", "ahbgdc")).toEqual(false);
});

test("third_IsSubsequenceBetter", () => {
  expect(IsSubsequence.IsSubsequenceBetter("acb", "ahbgcd")).toEqual(false);
});
