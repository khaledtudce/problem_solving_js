/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, 
more than once.

Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"
*/

import ReverseVowelOfString from "./ReverseVowelOfString";

test("basic_reverseVowelOfString", () => {
  expect(ReverseVowelOfString.reverseVowelOfString("IceCreAm")).toEqual(
    "AceCreIm"
  );
});

test("second_reverseVowelOfString", () => {
  expect(ReverseVowelOfString.reverseVowelOfString("leetcode")).toEqual(
    "leotcede"
  );
});

test("basic_reverseVowelOfStringBetter", () => {
  expect(ReverseVowelOfString.reverseVowelOfStringBetter("IceCreAm")).toEqual(
    "AceCreIm"
  );
});

test("second_reverseVowelOfStringBetter", () => {
  expect(ReverseVowelOfString.reverseVowelOfStringBetter("leetcode")).toEqual(
    "leotcede"
  );
});
