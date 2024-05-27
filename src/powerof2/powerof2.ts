const findExpo = (number: number) => {
  return Math.pow(2, number);
};

export function powersOfTwo(n: number): number[] {
  let array: number[] = [];

  for (let i = 0; i <= n; i++) {
    array.push(findExpo(i));
  }
  return array;
}
