import Palindrome from "./Palindrome";

test("basic test", () => {
  expect(Palindrome.isPalindrome("cabac")).toEqual(true);
});

test("pair number of letters", () => {
  expect(Palindrome.isPalindrome("carrac")).toEqual(true);
});

test("not palindrome", () => {
  expect(Palindrome.isPalindrome("cardac")).toEqual(false);
});
