export function twoSumAll(numbers: number[], target: number): Array<[number, number]> {
  const results: Array<[number, number]> = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        results.push([i + 1, j + 1]);
      }
    }
  }
  return results;
}