let NUMBERS: string;

export function add(numbers: string): number {
  if (!numbers || !numbers.length) return 0;

  NUMBERS = numbers;

  const delimiter = getDelimeters(NUMBERS);

  // Parse Numbers
  const numArray = NUMBERS.split(delimiter).map((num) => {
    const parsedNum = parseInt(num, 10);
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

const checkIfThereAreMultipleDelimeters = (numbers: string) => {
  return numbers.startsWith("//");
};

const getDelimeters = (numbers: string) => {
  if (checkIfThereAreMultipleDelimeters(numbers)) {
    const match = numbers.match(/^\/\/\[(.+)\]\n/);
    if (match) {
      [...match[0].matchAll(/\[(.)\]/g)].map((d) => {
        return;
      });
      const delimitersMatch = [...match[0].matchAll(/\[(.+?)\]/g)].map(
        (m) => m[1]
      );
      const delimiter = new RegExp(`[${delimitersMatch.join("")}]+`);
      NUMBERS = numbers.slice(match[0].length);
      return delimiter;
    }
  }

  return /,|\n/;
};
