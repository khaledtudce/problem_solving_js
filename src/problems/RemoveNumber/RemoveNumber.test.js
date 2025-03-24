import RemoveNumber from "./RemoveNumber";

test("Basic", () => {
  expect(RemoveNumber.removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(
    [0, 1, 2, 3, 4]
  );
});
