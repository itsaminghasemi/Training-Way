/**
 * Finds two indices in a sorted array such that their sum equals the target.
 * Uses the Two Pointers pattern for O(N) time complexity.
 * @param {number[]} inputArray - Sorted array of numbers.
 * @param {number} targetNumber - The target sum.
 * @returns {number[]} - Array containing the two indices.
 */
function findTwoSum(inputArray, targetNumber) {
  let leftIndex = 0;
  let rightIndex = inputArray.length - 1;

  // 1. Continue searching while pointers haven't crossed
  while (leftIndex < rightIndex) {
    // 2. Calculate sum dynamically at each step (Cleaner approach)
    const summition = inputArray[leftIndex] + inputArray[rightIndex];

    // 3. Check conditions based on the current sum
    if (summition === targetNumber) {
      return [leftIndex, rightIndex]; // Target found
    } else if (summition < targetNumber) {
      leftIndex++; // Sum is too small, move left pointer right to increase sum
    } else {
      rightIndex--; // Sum is too large, move right pointer left to decrease sum
    }
  }

  // 4. Return empty array or null if no pair is found
  return [];
}
