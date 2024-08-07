import { expect, it } from "vitest";

// Add the required type annotations below to both 'a' and 'b' to make the test pass

export const addTwoNumbers = (a, b) => {
  return a + b;
};

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
