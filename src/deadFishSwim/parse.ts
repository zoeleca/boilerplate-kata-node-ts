export function parse(data: string): number[] {
  const lettersArray = data.split("");
  let totalNumber = 0;
  const arrayNumber: number[] = [];

  for (const letter of lettersArray) {
    switch (letter) {
      case "o":
        arrayNumber.push(totalNumber);
        break;
      case "i":
        totalNumber++;
        break;
      case "d":
        totalNumber--;
        break;
      case "s":
        totalNumber *= totalNumber;
        break;
    }
  }

  if (arrayNumber.length === 0) {
    arrayNumber.push(totalNumber);
  }

  return arrayNumber;
}
