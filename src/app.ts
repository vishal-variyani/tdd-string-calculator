export function add(numbers: string): number {
  if (!numbers || !numbers.length) return 0;

  const delimiter = /,|\n/;
  const negativeNumbers: Array<number> = [];

  const numArray = numbers.split(delimiter).map((num) => {
    const parsedNum = parseInt(num, 10);
    if (isNaN(parsedNum)) {
      throw new Error(`Invalid input ${num}`);
    }

    if (parsedNum < 0) {
      negativeNumbers.push(parsedNum);
    }

    return parsedNum;
  });

  if (negativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );
  }

  return numArray.reduce((sum, ele) => sum + ele);
}
