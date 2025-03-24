import FirstStringOccurance from "./FirstStringOccurance";

test("basic test string", () => {
  expect(FirstStringOccurance.FindFirstStrOccur("sadbutsad", "sad")).toEqual(0);
});
