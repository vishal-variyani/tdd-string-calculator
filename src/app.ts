export function add(numbers: string): number {
  if (!numbers || !numbers.length) return 0;

  let delimiter = /,|\n/;
  const negativeNumbers: Array<number> = [];

  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n/);
    console.log(match);
    if (match) {
      delimiter = new RegExp(match[1], "g");
      numbers = numbers.slice(match[0].length);
    }
  }

  const numArray = numbers.split(delimiter).map((num) => {
    const parsedNum = parseInt(num, 10);
    if (isNaN(parsedNum)) {
      throw new Error(`Invalid input ${num}`);
    }

    if (parsedNum < 0) {
      negativeNumbers.push(parsedNum);
    }

    if (parsedNum > 1000) {
      // Ignores number if greater than 1000
      return 0;
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
