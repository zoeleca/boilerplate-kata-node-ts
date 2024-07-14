import { expect, it, describe } from "vitest";
import { parse } from "../../src/deadFishSwim/parse";
describe("parse", () => {
  it.only("should incremente the value when 'i' ", () => {
    expect(parse("i")).toStrictEqual([1]);
    expect(parse("iiii")).toStrictEqual([4]);
  });
  it.only("should decrease the value when 'd' ", () => {
    expect(parse("iiiidid")).toStrictEqual([3]);
    expect(parse("idi")).toStrictEqual([1]);
  });
  it.only("should square the value when 's' ", () => {
    expect(parse("iis")).toStrictEqual([4]);
    expect(parse("iiidisid")).toStrictEqual([9]);
  });
  it.only("should put the value in an array when 'o' ", () => {
    expect(parse("iio")).toStrictEqual([2]);
    expect(parse("iiisdoso")).toStrictEqual([8, 64]);
  });
  it.only("should skip the value in an array when other letters ", () => {
    expect(parse("itiisydoso")).toStrictEqual([8, 64]);
  });
});
