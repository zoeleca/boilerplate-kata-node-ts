export function xo(str: string): boolean {
  const lowerStr = str.toLowerCase();

  let xCount: number = 0;
  let oCount: number = 0;

  for (const char of lowerStr) {
    if (char === "x") {
      xCount++;
    } else if (char === "o") {
      oCount++;
    }
  }
  return xCount === oCount;
}
