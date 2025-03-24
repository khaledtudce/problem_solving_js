/*
    Return all pairs of indices (i,j) fo which 
    array1[i]+array2[j]===sumToLookfor applies
    Array 1: [1,2,3,4]
    Array 2: [3,1,2]
    For which array elements is the sum 5
    Example input
    sumOfTwo([1,2,3],[4,2,1], 2) //Expected:[[0,2]]
    sumOfTwo([1,2,5,4], [3,1,2], 5) //Expected: [[1,0], [3,1]]
*/
import SumToLookFor from "./SumToLookFor";

test("sum of two basic rules", () => {
  expect(SumToLookFor.SumOfTwo([1, 2, 3], [4, 2, 1], 2)).toEqual([[0, 2]]);
});

test("sum of two basic advance rules", () => {
  expect(SumToLookFor.SumOfTwo([1, 2, 5, 4], [3, 1, 2], 5)).toEqual([
    [1, 0],
    [3, 1],
  ]);
});

test("sum of two basic rules optimized", () => {
  console.log(SumToLookFor.SumOfTwoBetter([1, 2, 3], [4, 2, 1], 2));
  expect(SumToLookFor.SumOfTwoBetter([1, 2, 3], [4, 2, 1], 2)).toEqual([
    [0, 2],
  ]);
});

test("sum of two basic advance rules optimized", () => {
  expect(SumToLookFor.SumOfTwoBetter([1, 2, 5, 4], [3, 1, 2], 5)).toEqual([
    [1, 0],
    [3, 1],
  ]);
});

test("sum of two basic rules more optimized", () => {
  console.log(SumToLookFor.SumOfTwoEvenBetter([1, 2, 3], [4, 2, 1], 2));
  expect(SumToLookFor.SumOfTwoEvenBetter([1, 2, 3], [4, 2, 1], 2)).toEqual([
    [0, 2],
  ]);
});

test("sum of two basic advance rules more optimized", () => {
  expect(SumToLookFor.SumOfTwoEvenBetter([1, 2, 5, 4], [3, 1, 2], 5)).toEqual([
    [1, 0],
    [3, 1],
  ]);
});
