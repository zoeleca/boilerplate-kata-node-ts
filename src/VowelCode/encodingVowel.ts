class VowelConverter {
  private vowelConversion = new Map<string, string>([
    ["a", "1"],
    ["e", "2"],
    ["i", "3"],
    ["o", "4"],
    ["u", "5"],
  ]);

  private numberConversion = new Map<string, string>([
    ["1", "a"],
    ["2", "e"],
    ["3", "i"],
    ["4", "o"],
    ["5", "u"],
  ]);

  public encodingVowel = (character: string): string => {
    return this.vowelConversion.get(character) ?? character;
  };
  public decodingNumber = (character: string): string => {
    return this.numberConversion.get(character) ?? character;
  };
}

export function encodingSentences(inputString: string): string {
  const converter = new VowelConverter();
  return [...inputString].map(converter.encodingVowel).join("");
}

export function decodingSentences(inputString: string): string {
  const converter = new VowelConverter();
  return [...inputString].map(converter.decodingNumber).join("");
}
