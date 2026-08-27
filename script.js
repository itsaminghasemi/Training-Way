/**
 * Finds the first duplicate number in an array using a Hash Set.
 * @param {number[]} inputArray - The array of numbers to search.
 * @returns {number|undefined} - The first duplicate number, or undefined if none exists.
 */
function findFirstDuplicate(inputArray) {
  // 1. Initialize a Set to keep track of seen numbers (O(1) lookup)
  const seen = new Set();

  // 2. Linear traversal of the input array (O(N) time)
  for (const num of inputArray) {
    // 3. Check if the number already exists in the Set
    if (seen.has(num)) {
      return num; // First duplicate found, return immediately
    }

    // 4. If not seen, add it to the Set for future checks
    seen.add(num);
  }

  // 5. Return undefined if the loop completes without finding duplicates
  return undefined;
}
