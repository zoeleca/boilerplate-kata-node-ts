import { expect, test, describe } from "vitest";
import { smash, smashRefacto } from "../../src/smashSentence/SmashSentence";

describe("smash", () => {
  test("should return empty string for empty array.", () => {
    expect(smash([])).toStrictEqual("");
  });

  test("one word should return the word.", () => {
    expect(smash(["hello"])).toStrictEqual("hello");
  });

  test("Multiple words should be separated by spaces.", () => {
    expect(smash(["hello", "world"])).toStrictEqual("hello world");
    expect(smash(["hello", "amazing", "world"])).toStrictEqual(
      "hello amazing world"
    );
    expect(
      smash(["this", "is", "a", "very", "long", "sentence"])
    ).toStrictEqual("this is a very long sentence");
  });
});

//refactoring of smash function
describe("smashRefacto", () => {
  test("should return empty string for empty array.", () => {
    expect(smashRefacto([])).toStrictEqual("");
  });

  test("one word should return the word.", () => {
    expect(smashRefacto(["hello"])).toStrictEqual("hello");
  });

  test("Multiple words should be separated by spaces.", () => {
    expect(smashRefacto(["hello", "world"])).toStrictEqual("hello world");
    expect(smashRefacto(["hello", "amazing", "world"])).toStrictEqual(
      "hello amazing world"
    );
    expect(
      smashRefacto(["this", "is", "a", "very", "long", "sentence"])
    ).toStrictEqual("this is a very long sentence");
  });
});
