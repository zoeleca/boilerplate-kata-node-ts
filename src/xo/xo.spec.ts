import { expect, test, describe } from "vitest";
import { xo } from "./xo";

describe("Xo", () => {
  test("return true if input is 'xo'", () => {
    expect(xo("xo")).toBe(true);
  });
  test("return true if input is 'xxOo' ", () => {
    expect(xo("xxOo")).toEqual(true);
  });
  test("return false if input is 'xxxm' ", () => {
    expect(xo("xxxm")).toEqual(false);
  });
});
