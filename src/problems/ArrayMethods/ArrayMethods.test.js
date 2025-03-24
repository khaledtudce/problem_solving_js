import ArrayMethods from "./ArrayMethods";

test("map test", () => {
  expect(ArrayMethods.mapOperation([5, 2, 6, 4, 8], 10)).toEqual([
    15, 12, 16, 14, 18,
  ]);
});

test("filter test", () => {
  expect(ArrayMethods.filterOperation([5, 2, 6, 8, 7, 11])).toEqual([2, 6, 8]);
});

test("reduce test", () => {
  expect(ArrayMethods.reduceOperation([5, 2, 6, 8, 7, 11])).toEqual(39);
});
