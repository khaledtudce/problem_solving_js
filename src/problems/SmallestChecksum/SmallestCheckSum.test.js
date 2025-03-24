/*  TODO: Implement a function to sum up all digits of a number and repeat this until the result only has one digit. 
    Example: 250 -> 7
    Example: 252345560 -> 32 -> 5
    Example: 7815463798 -> 58 ->13 ->4 
*/
import SmallestCheckSum from "./SmallestCheckSum";

test("basic 250", () => {
  expect(SmallestCheckSum.SmallestCheckSum(250)).toEqual(7);
});

test("advanced 252345560", () => {
  expect(SmallestCheckSum.SmallestCheckSum(252345560)).toEqual(5);
});

test("more advanced 7815463798", () => {
  expect(SmallestCheckSum.SmallestCheckSum(7815463798)).toEqual(4);
});

test("basic 250_better", () => {
  expect(SmallestCheckSum.SmallestCheckSumBetter(250)).toEqual(7);
});

test("advanced 252345560_better", () => {
  expect(SmallestCheckSum.SmallestCheckSumBetter(252345560)).toEqual(5);
});

test("more advanced 7815463798_better", () => {
  expect(SmallestCheckSum.SmallestCheckSumBetter(7815463798)).toEqual(4);
});
