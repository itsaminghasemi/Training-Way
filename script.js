(function () {
  /**
   * Analyzes an array of transactions, summing positives, skipping negatives,
   * and halting on zero.
   * @param {number[]} transactions - Array of transaction amounts.
   * @returns {Object} An object containing 'positiveSum' and 'status'.
   */
  function analyzeTransactions(transactions) {
    let i = 0;
    // 1. Initialize the sum to 0 to avoid NaN errors.
    let positiveSum = 0;

    // 2. Iterate through the array using a while loop.
    while (i < transactions.length) {
      const current = transactions[i];

      // 3. Halt the entire loop immediately if the transaction is exactly 0.
      if (current === 0) {
        break;
      }
      // 4. Skip negative numbers.
      else if (current < 0) {
        i++; // Must increment before continue to avoid an infinite loop!
        continue;
      }
      // 5. Add positive numbers to the running total.
      else {
        positiveSum += current;
      }

      // 6. Increment the index for the next iteration.
      i++;
    }

    // 7. Use a ternary operator (Expression) to assign the status string.
    const status = positiveSum > 100 ? 'High Volume' : 'Low Volume';

    // 8. Return the result using ES6 property shorthand.
    return { positiveSum, status };
  }

  // 🧪 Test Cases
  console.log(analyzeTransactions([50, -10, 100, 20]));
  // Expected: { positiveSum: 170, status: "High Volume" }

  console.log(analyzeTransactions([10, 20, 0, 200]));
  // Expected: { positiveSum: 30, status: "Low Volume" }

  console.log(analyzeTransactions([-5, -10, 0]));
  // Expected: { positiveSum: 0, status: "Low Volume" }
})();
