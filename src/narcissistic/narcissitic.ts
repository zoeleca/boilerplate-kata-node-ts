export function narcissistic(n: number): boolean {
  const number: string[] = n.toString().split("");
  let total: number = 0;
  for (const num of number) {
    const parseNumber = parseInt(num);
    total += parseNumber ** number.length;
  }

  return total === n;
}
