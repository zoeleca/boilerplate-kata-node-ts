import { expect, test, describe } from "vitest";
import { starTree } from "../../src/starTree/starTree";

describe("starTree", () => {
  test("['*'] if n = 1", () => {
    expect(starTree(1)).toEqual(["*"]);
  });
  test("['  *  ',' *** ','*****'] if n = 3", () => {
    expect(starTree(3)).toEqual(["  *  ", " *** ", "*****"]);
  });
  test("['    *    ','   ***   ','  *****  ',' ******* ','*********'] if n = 5", () => {
    expect(starTree(5)).toEqual([
      "    *    ",
      "   ***   ",
      "  *****  ",
      " ******* ",
      "*********",
    ]);
  });
});
