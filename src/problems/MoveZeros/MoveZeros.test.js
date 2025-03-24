/*Given an integer array nums, move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Example 3:
Input: nums = [0]
Output: [0]
*/
import moveZeroes from "./MoveZeros";

test("basic moveZeros", () => {
  expect(moveZeroes.moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
});

test("general moveZeros", () => {
  expect(moveZeroes.moveZeroes([0])).toEqual([0]);
});

test("advanced moveZeros", () => {
  expect(moveZeroes.moveZeroes([0, 1, 0])).toEqual([1, 0, 0]);
});

test("basic moveZerosBetter", () => {
  expect(moveZeroes.moveZeroesBetter([0, 1, 0, 3, 12])).toEqual([
    1, 3, 12, 0, 0,
  ]);
});

test("general moveZerosBetter", () => {
  expect(moveZeroes.moveZeroesBetter([0])).toEqual([0]);
});

test("advanced moveZerosBetter", () => {
  expect(moveZeroes.moveZeroesBetter([0, 1, 0])).toEqual([1, 0, 0]);
});

test("basic moveZeroesMoreBetter", () => {
  expect(moveZeroes.moveZeroesMoreBetter([0, 1, 0, 3, 12])).toEqual([
    1, 3, 12, 0, 0,
  ]);
});

test("general moveZeroesMoreBetter", () => {
  expect(moveZeroes.moveZeroesMoreBetter([0])).toEqual([0]);
});

test("advanced moveZeroesMoreBetter", () => {
  expect(moveZeroes.moveZeroesMoreBetter([0, 1, 0])).toEqual([1, 0, 0]);
});
