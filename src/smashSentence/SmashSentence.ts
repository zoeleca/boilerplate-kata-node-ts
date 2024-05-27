/**
 * Write a function that takes an array of words and smashes them together
 * into a sentence and returns the sentence.
 * You can ignore any need to sanitize words or add punctuation,
 * but you should add spaces between each word.
 * Be careful, there shouldn't be a space at the beginning or the end of the sentence!
 *
 */

export function smash(words: string[]): string {
  if (words.length == 0) {
    return "";
  } else {
    let sentence: string = "";
    const space: string = " ";
    const lastWord: number = words.length - 1;

    for (let i: number = 0; i < words.length; i++) {
      if (i == lastWord) {
        sentence += words[i];
      } else sentence += words[i] + space;
    }
    return sentence;
  }
}

export function smashRefacto(words: string[]): string {
  return words.join(" ");
}
