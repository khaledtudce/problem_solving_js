/*
1207. Unique Number of Occurences
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
*/
import UniqueNumberOfOccurences from "./UniqueNumberOfOccurences";

test("basic_uniqueOccurences", () => {
  expect(UniqueNumberOfOccurences.uniqueOccurences([1, 2, 2, 1, 1, 3])).toEqual(
    true
  );
});

test("second_uniqueOccurences", () => {
  expect(UniqueNumberOfOccurences.uniqueOccurences([1, 2])).toEqual(false);
});

test("third_uniqueOccurences", () => {
  expect(
    UniqueNumberOfOccurences.uniqueOccurences([
      -3, 0, 1, -3, 1, 1, 1, -3, 10, 0,
    ])
  ).toEqual(true);
});

test("basic_uniqueOccurencesBetterSyntax", () => {
  expect(
    UniqueNumberOfOccurences.uniqueOccurencesBetterSyntax([1, 2, 2, 1, 1, 3])
  ).toEqual(true);
});

test("second_uniqueOccurencesBetterSyntax", () => {
  expect(UniqueNumberOfOccurences.uniqueOccurencesBetterSyntax([1, 2])).toEqual(
    false
  );
});

test("third_uniqueOccurencesBetterSyntax", () => {
  expect(
    UniqueNumberOfOccurences.uniqueOccurencesBetterSyntax([
      -3, 0, 1, -3, 1, 1, 1, -3, 10, 0,
    ])
  ).toEqual(true);
});
