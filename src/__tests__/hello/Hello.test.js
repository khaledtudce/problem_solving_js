import Hello from "../../problems/hello/Hello";

test("hello test", () => {
  expect(Hello.sayHello()).toEqual("hello");
});
