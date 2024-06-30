export function sumDigits(n: number): number {
  let sum = 0;
  let splitDigits = [...(Math.abs(n) + "")].map((n) => +n);
  splitDigits.forEach((number) => {
    sum += number;
  });
  return sum;
}
