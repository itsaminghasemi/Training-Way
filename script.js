/**
 * Finds two numbers in a sorted array whose sum equals the target.
 * @param {number[]} numbers - Sorted array of numbers.
 * @param {number} target - The target sum.
 * @returns {[number, number]|undefined} - The matching pair or undefined.
 */
function findPairWithTarget(numbers, target) {
  // Initialize the left pointer at the beginning of the array.
  let left = 0;

  // Initialize the right pointer at the end of the array.
  let right = numbers.length - 1;

  // Continue while the pointers have not crossed.
  while (left < right) {
    // Calculate the sum of the values at both pointers.
    const sum = numbers[left] + numbers[right];

    // Return the pair immediately when the target is found.
    if (sum === target) {
      return [numbers[left], numbers[right]];
    }

    // If the sum is too small, move left forward to increase it.
    if (sum < target) {
      left++;
    } else {
      // If the sum is too large, move right backward to decrease it.
      right--;
    }
  }

  // Return undefined when no valid pair exists.
  return undefined;
}
