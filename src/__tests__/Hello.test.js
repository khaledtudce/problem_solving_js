import Hello from "../problems/Hello";

test("hello test", () => {
  expect(Hello.sayHello()).toEqual("hello");
});