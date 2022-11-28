import TwoSum from "../problems/TwoSum";

test("twoSum test", () => {
  expect(TwoSum.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("twoSum test1", () => {
  expect(TwoSum.twoSum([3, 3], 6)).toEqual([0, 1]);
});

test("twoSum test2", () => {
  expect(TwoSum.twoSum([2, 5, 5, 11], 10)).toEqual([1, 2]);
});
