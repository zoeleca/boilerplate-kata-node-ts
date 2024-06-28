import { expect, test, describe } from "vitest";
import { narcissistic } from "../../src/narcissistic/narcissitic";
describe("Narcissistic", () => {
  test("153 to be a narcissistic number", () => {
    expect(narcissistic(153)).toBe(true);
  });
  test("7 to be a narcissistic number", () => {
    expect(narcissistic(7)).toBe(true);
  });
  test("1564 to be a narcissistic number", () => {
    expect(narcissistic(1564)).toBe(false);
  });
});
