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
import SumToLookFor1 from "./SumToLookFor1";

test("when basic input given should work", () => {
  expect(SumToLookFor1.SumToLookFor([1, 3], [2, 1], 2)).toEqual([[0, 1]]);
});

test("when advanced input given should show empty result", () => {
  expect(SumToLookFor1.SumToLookFor([1, 2, 5, 4], [3, 1, 2], 5)).toEqual([
    [1, 0],
    [3, 1],
  ]);
});

test("better when basic input given should work", () => {
  expect(SumToLookFor1.SumToLookForBetter([1, 3], [2, 1], 2)).toEqual([[0, 1]]);
});

test("better when advanced input given should show empty result", () => {
  expect(SumToLookFor1.SumToLookForBetter([1, 2, 5, 4], [3, 1, 2], 5)).toEqual([
    [1, 0],
    [3, 1],
  ]);
});

test("even better when basic input given should work", () => {
  expect(SumToLookFor1.SumToLookForEvenBetter([1, 3], [2, 1], 2)).toEqual([
    [0, 1],
  ]);
});

test("even better when advanced input given should show empty result", () => {
  expect(
    SumToLookFor1.SumToLookForEvenBetter([1, 2, 5, 4], [3, 1, 2], 5)
  ).toEqual([
    [1, 0],
    [3, 1],
  ]);
});
