export function add(numbers: string): number {
  if (!numbers || !numbers.length) return 0;

  const { processedNumbers, delimiter } = getDelimeters(numbers);

  // Parse Numbers
  const numArray = processedNumbers.split(delimiter).map((num) => {
    const parsedNum = parseInt(num, 10);
    // Check if the input is valid or not
    if (isNaN(parsedNum)) {
      throw new Error(`Invalid input ${num}`);
    }

    return parsedNum;
  });

  // Filter Negative Numers
  const negativeNumbers = numArray.filter((num) => num < 0);

  if (negativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );
  }

  const removeNumberGreaterThanThousand = numArray.filter((num) => num < 1000);

  return removeNumberGreaterThanThousand.reduce((sum, ele) => sum + ele);
}

const checkIfThereAreMultipleDelimeters = (numbers: string): boolean => {
  return numbers.startsWith("//");
};

const getDelimeters = (
  numbers: string
): { processedNumbers: string; delimiter: RegExp } => {
  if (checkIfThereAreMultipleDelimeters(numbers)) {
    const match = numbers.match(/^\/\/(.+)\n/);
    if (match) {
      const delimiter = new RegExp(`[${match[1]}]+`);
      numbers = numbers.slice(match[0].length);
      return { processedNumbers: numbers, delimiter };
    }
  }

  return { processedNumbers: numbers, delimiter: /,|\n/ };
};
