export function starTree(n: number): string[] {
  const star: string = "*";
  const space: string = " ";
  const treeArray: string[] = [];
  for (let i = 1; i < n + 1; i++) {
    buildTree(i);
  }
  return treeArray;

  function buildTree(i: number) {
    const firstLine =
      space.repeat(n - i) + star.repeat(i) + space.repeat(n - i);
    const line =
      space.repeat(n - i) + star.repeat(i + (i - 1)) + space.repeat(n - i);
    if (i === 1) {
      treeArray.push(firstLine);
    } else {
      treeArray.push(line);
    }
  }
}
