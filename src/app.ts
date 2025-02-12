export function add(numbers: string): number {
  if (!numbers || !numbers.length) return 0;

  const delimiter = /,|\n/;
  const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));
  console.log(numArray);
  return numArray.reduce((sum, ele) => sum + ele);
}
