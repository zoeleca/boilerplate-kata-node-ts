import { beforeEach, describe, expect, it } from "vitest";
import { encodingSentences, decodingSentences } from "./encodingVowel";

describe("EncodingVowel", () => {
  describe("No Vowel Sentence", () => {
    it("should all sentence if no vowel", () => {
      expect(encodingSentences("hll hr blvhj")).toStrictEqual("hll hr blvhj");
    });
  });

  describe("Vowel econding", () => {
    it("should encode a -> 1 ", () => {
      expect(encodingSentences("a")).toStrictEqual("1");
    });
    it("should encode e -> 2 ", () => {
      expect(encodingSentences("e")).toStrictEqual("2");
    });
    it("should encode i -> 3 ", () => {
      expect(encodingSentences("i")).toStrictEqual("3");
    });
    it("should encode o -> 4 ", () => {
      expect(encodingSentences("o")).toStrictEqual("4");
    });
    it("should encode u -> 5 ", () => {
      expect(encodingSentences("u")).toStrictEqual("5");
    });
  });

  describe("Vowel econding in sentences", () => {
    it("should return vowel encoding in a sentence", () => {
      expect(encodingSentences("Hello my name is Zoe")).toStrictEqual(
        "H2ll4 my n1m2 3s Z42"
      );
    });
    it("should return vowel encoding in a sentence", () => {
      expect(encodingSentences("How are you today?")).toStrictEqual(
        "H4w 1r2 y45 t4d1y?"
      );
    });
  });
});

describe("DecodingVowel", () => {
  describe("No Vowel Sentence", () => {
    it("should return all sentence if no vowel", () => {
      expect(decodingSentences("hll hr blvhj")).toStrictEqual("hll hr blvhj");
    });
  });

  describe("Vowel Decoding", () => {
    // Corrected label here
    it("should decode 1 -> a", () => {
      expect(decodingSentences("1")).toStrictEqual("a");
    });
    it("should decode 2 -> e", () => {
      expect(decodingSentences("2")).toStrictEqual("e");
    });
    it("should decode 3 -> i", () => {
      expect(decodingSentences("3")).toStrictEqual("i");
    });
    it("should decode 4 -> o", () => {
      expect(decodingSentences("4")).toStrictEqual("o");
    });
    it("should decode 5 -> u", () => {
      expect(decodingSentences("5")).toStrictEqual("u");
    });
  });

  describe("Vowel Decoding in Sentences", () => {
    // Corrected label here
    it("should return vowel decoding in a sentence", () => {
      expect(decodingSentences("H2ll4 my n1m2 3s Z42")).toStrictEqual(
        "Hello my name is Zoe"
      );
    });
    it("should return vowel decoding in a sentence", () => {
      expect(decodingSentences("H4w 1r2 y45 t4d1y?")).toStrictEqual(
        "How are you today?"
      );
    });
  });
});
