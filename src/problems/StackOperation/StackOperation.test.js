import StackOperation from "./StackOperation";

test("basic_FindDiffTwoArrays", () => {
  //expect(StackOperation.stack("swap", 0)).toEqual([]);
  expect(StackOperation.stack("push", 99)).toEqual([
    1,
    { id: 1, value: "obj" },
    "stringHolder",
    46,
    99,
  ]);
});
