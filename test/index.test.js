const { sum, multiply } = require("../index");

test("sum gives the correct result", () => {
  expect(sum(1, 1)).toEqual(2);
});

test("multiply gives the correct result", () => {
  expect(multiply(2, 2)).toEqual(4);
});
