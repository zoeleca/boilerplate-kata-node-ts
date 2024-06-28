import { expect, test, describe } from "vitest";
import { powersOfTwo } from "../../src/powerof2/powerof2";

describe("powerOftwo", () => {
  test("fixed test", () => {
    expect(powersOfTwo(0)).toStrictEqual([1]);
    expect(powersOfTwo(1)).toEqual([1, 2]);
    expect(powersOfTwo(4)).toEqual([1, 2, 4, 8, 16]);
  });
});
