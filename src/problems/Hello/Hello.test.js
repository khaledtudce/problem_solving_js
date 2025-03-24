import Hello from "./Hello";

test("hello test", () => {
  expect(Hello.sayHello()).toEqual("hello");
});