import { expect, describe, it } from "vitest";
import { sumDigits } from "../../src/sumDigits/sumDigits";

/**
 * Write a function named sumDigits which takes a number as input
 * and returns the sum of the absolute value
 * of each of the number's decimal digits.
 */

describe("sumDigits", () => {
  it("10 in input should return 1", () => {
    expect(sumDigits(10)).toStrictEqual(1);
  });
  it("99 in input should return 18", () => {
    expect(sumDigits(99)).toStrictEqual(18);
  });
  it("-32 in input should return 5", () => {
    expect(sumDigits(-32)).toStrictEqual(5);
  });
});
