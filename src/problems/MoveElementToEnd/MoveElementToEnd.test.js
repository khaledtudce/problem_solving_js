import MoveElementToEnd from "./MoveElementToEnd";

test("moveElementToEnd test", () => {
  expect(
    MoveElementToEnd.moveElementToEndSolution2([2, 1, 2, 2, 2, 3, 4, 2], 2)
  ).toEqual([1, 3, 4, 2, 2, 2, 2, 2]);
});

/*
test("moveElementToEnd test1", () => {
  expect(
    MoveElementToEnd.moveElementToEndSolution2([2, 9, 6, 2, 6, 3, 4, 2], 6)
  ).toEqual([2, 9, 2, 3, 4, 2, 6, 6]);
});*/
