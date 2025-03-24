/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers 
cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, 
and an integer n, return true if n new flowers can be planted in the flowerbed without violating 
the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
*/

import CanPlaceFlowers from "./CanPlaceFlowers";

test("basic_CanplanceFlowers", () => {
  expect(CanPlaceFlowers.CanplanceFlowers([1, 0, 0, 0, 1], 1)).toEqual(true);
});

test("second_CanplanceFlowers", () => {
  expect(CanPlaceFlowers.CanplanceFlowers([1, 0, 0, 0, 1], 2)).toEqual(false);
});

test("third_CanplanceFlowers", () => {
  expect(CanPlaceFlowers.CanplanceFlowers([1, 0, 0, 0, 0, 0, 1], 2)).toEqual(
    true
  );
});

test("fourth_CanplanceFlowers", () => {
  expect(CanPlaceFlowers.CanplanceFlowers([1, 0, 1, 0, 1, 0, 1], 1)).toEqual(
    false
  );
});

test("fiveth_CanplanceFlowers", () => {
  expect(CanPlaceFlowers.CanplanceFlowers([0, 0, 1, 0, 1], 1)).toEqual(true);
});

test("basic_CanplanceFlowersWorks", () => {
  expect(CanPlaceFlowers.CanplanceFlowersWorks([1, 0, 0, 0, 1], 1)).toEqual(
    true
  );
});

test("second_CanplanceFlowersWorks", () => {
  expect(CanPlaceFlowers.CanplanceFlowersWorks([1, 0, 0, 0, 1], 2)).toEqual(
    false
  );
});

test("third_CanplanceFlowersWorks", () => {
  expect(
    CanPlaceFlowers.CanplanceFlowersWorks([1, 0, 0, 0, 0, 0, 1], 2)
  ).toEqual(true);
});

test("fourth_CanplanceFlowersWorks", () => {
  expect(
    CanPlaceFlowers.CanplanceFlowersWorks([1, 0, 1, 0, 1, 0, 1], 1)
  ).toEqual(false);
});

test("fiveth_CanplanceFlowersWorks", () => {
  expect(CanPlaceFlowers.CanplanceFlowersWorks([0, 0, 1, 0, 1], 1)).toEqual(
    true
  );
});
